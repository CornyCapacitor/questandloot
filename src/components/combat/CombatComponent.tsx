'use client'

import { monsterList } from "@/app/db/monsterList"
import { calculateDungeonBossLevel } from "@/app/functions/calculateDungeonBossLevel"
import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { combat } from "@/app/functions/combat"
import { parseCombatLog } from "@/app/functions/combatLogParser"
import { applyLoot } from "@/app/functions/manageItems"
import { generateLoot } from "@/app/generators/generateLoot"
import { generateMonster } from "@/app/generators/generateMonster"
import { chosenDungeonAtom, combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Attributes, Items, LogEntry, Monster, Player } from "@/app/types"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { Loading } from "../layout/Loading"
import { Combat } from "./Combat"

type FinishedCombatType = {
  isWin: boolean,
  combatLog: LogEntry[],
  loot: number[] | null
}

export const CombatComponent = () => {
  const [turn, setTurn] = useState(0)
  const [, setFinishedCombat] = useState<FinishedCombatType | null>(null)
  const [combatLog, setCombatLog] = useState<LogEntry[] | null>(null)
  const [gold, setGold] = useState<number | null>(null)
  const [experience, setExperience] = useState<number | null>(null)
  const [loot, setLoot] = useState<Items[]>([])
  const [character1Attributes, setCharacter1Attributes] = useState<Attributes | null>(null)
  const [character2Attributes, setCharacter2Attributes] = useState<Attributes | null>(null)
  const [character1, setCharacter1] = useAtom<Player | null>(playerAtom)
  const [character2, setCharacter2] = useState<Monster | null>(null)

  const [isInitialized, setIsInitialized] = useState(false)
  const [isCombatReady, setIsCombatReady] = useAtom(combatReadyAtom)

  const [chosenDungeon, setChosenDungeon] = useAtom(chosenDungeonAtom)

  // Page preparation & perform combat
  useEffect(() => {
    console.log("🔥 useEffect triggered");
    console.log("🟢 character1:", character1);
    console.log("🟢 character2:", character2);
    // I really need to refactor this one, its so bad
    if (!character1 || !character2) return
    console.log("✅ Mam obu bohaterów!");

    if (chosenDungeon) {
      console.log("🏰 Dungeon combat start!");
      const combatResult = combat(character1, character2, 100, true)
      const char1Attributes = calculatePlayerAttributes(character1.equipment, character1.attributes, character1.activePotion)
      const char2Attributes = character2.attributes

      setFinishedCombat(combatResult)
      setCombatLog(combatResult.combatLog)
      setCharacter1Attributes(char1Attributes ? char1Attributes : null)
      setCharacter2Attributes(char2Attributes ? char2Attributes : null)

      const earnedLoot = combatResult.loot ? generateLoot(combatResult.loot, character1.profession, character1.level) : []
      const earnedGold = combatResult.gold ? combatResult.gold : null
      const earnedExperience = combatResult.experience ? combatResult.experience : null

      setLoot(earnedLoot)
      setGold(earnedGold)
      setExperience(earnedExperience)

      const lootToApply = applyLoot(earnedLoot, character1)

      setCharacter1({
        ...character1,
        dungeon: {
          refreshDate: null,
          dungeonProgress: {
            ...character1.dungeon.dungeonProgress,
            [chosenDungeon]: combatResult.isWin ? character1.dungeon.dungeonProgress[chosenDungeon] += 1 : character1.dungeon.dungeonProgress[chosenDungeon]
          }
        },
        gold: character1.gold + (earnedGold ?? 0),
        inventory: lootToApply.inventory,
        materials: lootToApply.materials,
        experience: character1.experience + (earnedExperience ?? 0)
      })

      setChosenDungeon(null)

    } else {
      if (!character1.activeJourney?.valueMultiplier) return
      const combatResult = combat(character1, character2, character1.activeJourney.valueMultiplier, false)
      const log = combatResult.combatLog
      const parsedLog = parseCombatLog(log)
      const char1Attributes = calculatePlayerAttributes(character1.equipment, character1.attributes, character1.activePotion)
      const char2Attributes = character2.attributes

      setFinishedCombat(combatResult)
      setCombatLog(log)
      setCharacter1Attributes(char1Attributes ? char1Attributes : null)
      setCharacter2Attributes(char2Attributes ? char2Attributes : null)

      const earnedLoot = combatResult.loot ? generateLoot(combatResult.loot, character1.profession, character1.level) : []
      const earnedGold = combatResult.gold ? combatResult.gold : null
      const earnedExperience = combatResult.experience ? combatResult.experience : null

      setLoot(earnedLoot)
      setGold(earnedGold)
      setExperience(earnedExperience)

      const lootToApply = applyLoot(earnedLoot, character1)

      setCharacter1({
        ...character1,
        activeJourney: null,
        gold: character1.gold + (earnedGold ?? 0),
        inventory: lootToApply.inventory,
        materials: lootToApply.materials,
        experience: character1.experience + (earnedExperience ?? 0)
      })
    }

    console.log("🔵 Setting isInitialized = true, isCombatReady = false");
    setIsInitialized(true)
    setIsCombatReady(false)
    console.log("🟢 Ustawione wartości: isInitialized = true, isCombatReady = false");

    setTimeout(() => {
      console.log("⏳ Po 1 sekundzie: isInitialized =", isInitialized, "isCombatReady =", isCombatReady);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character1, character2])

  // Debugging
  useEffect(() => {
    console.log("🛠️ isInitialized zmieniony:", isInitialized);
  }, [isInitialized]);

  useEffect(() => {
    console.log("⚙️ isCombatReady zmieniony:", isCombatReady);
  }, [isCombatReady]);

  // Apply monster for a combat
  useEffect(() => {
    if (!character1 || character2 || !isCombatReady || isInitialized) return
    if (chosenDungeon) {
      const randomZone = Object.keys(monsterList)[Math.floor(Math.random() * Object.keys(monsterList).length)]
      const dungeonIndex = Number(chosenDungeon.replace("dungeon", ""))
      const currentDungeonProgress = character1.dungeon.dungeonProgress[chosenDungeon]
      const bossLevel = calculateDungeonBossLevel(dungeonIndex, currentDungeonProgress)
      setCharacter2(generateMonster(bossLevel, randomZone, true))
    } else {
      if (!character1.activeJourney) return
      setCharacter2(generateMonster(character1.level, character1.activeJourney.zone.name, false))
    }
  }, [character1, character2, isCombatReady, isInitialized])

  if (!character1 || !character2 || !combatLog) {
    return (
      <Loading loaded={!isInitialized && !isCombatReady} text="Probably you do not have an active journey combat to perform. Please go for a journey and wait for a combat" />
    )
  }

  return (
    <Combat character1={character1} character2={character2} combatLog={combatLog} turn={turn} setTurn={setTurn} gold={gold} experience={experience} loot={loot} />
  )
}