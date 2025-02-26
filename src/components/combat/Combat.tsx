import { monsterList } from "@/app/db/monsterList"
import { isDungeonKey } from "@/app/functions/checkers"
import { combat } from "@/app/functions/combat"
import { applyLoot } from "@/app/functions/manageItems"
import { generateLoot } from "@/app/generators/generateLoot"
import { generateMonster } from "@/app/generators/generateMonster"
import { useSocket } from "@/app/middleware/SocketContext"
import { combatTypeAtom, playerAtom } from "@/app/state/atoms"
import { Items, LogEntry, Monster, Player } from "@/app/types"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { Display } from "./Display"

type CombatResult = {
  isWin: boolean,
  combatLog: LogEntry[],
  loot: number[],
  experience: number,
  gold: number
}

export const Combat = () => {
  const [player] = useAtom(playerAtom)
  const [combatType, setCombatType] = useAtom(combatTypeAtom)
  const { updatePlayer } = useSocket()
  const [character1, setCharacter1] = useState<Player | null>(null)
  const [character2, setCharacter2] = useState<Monster | null>(null)
  const [combatResult, setCombatResult] = useState<CombatResult | null>(null)
  const [loot, setLoot] = useState<Items[] | null>(null)

  const [turn, setTurn] = useState(0)

  console.log('On combat page. Actual player that I have:', player)

  // Set combat
  useEffect(() => {
    if (!character1 || !character2 || !combatType || combatResult) return

    const multiplier = character1.activeJourney?.valueMultiplier ? character1.activeJourney.valueMultiplier : 100
    const isDungeon = isDungeonKey(combatType)
    const result = combat(character1, character2, multiplier, isDungeon)
    setCombatResult(result)

    const generatedLoot = generateLoot(result.loot, character1.profession, character2.level)
    setLoot(generatedLoot)
    const lootToApply = applyLoot(generateLoot(result.loot, character1.profession, character2.level), character1)

    const updatedDungeon = isDungeon ?
      {
        refreshDate: character1.dungeon.refreshDate,
        dungeonProgress: {
          ...character1.dungeon.dungeonProgress,
          [combatType]: result.isWin ? character1.dungeon.dungeonProgress[combatType] += 1 : character1.dungeon.dungeonProgress[combatType]
        }
      }
      : character1.dungeon

    updatePlayer({
      ...character1,
      dungeon: updatedDungeon,
      activeJourney: null,
      gold: character1.gold += result.gold,
      experience: character1.experience += result.experience,
      materials: lootToApply.materials,
      inventory: lootToApply.inventory
    })

    setCombatType(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character1, character2, combatType])

  // Set character1
  useEffect(() => {
    if (character1 || !combatType) return

    setCharacter1(player)
  }, [player, character1, combatType])

  // Set character2
  useEffect(() => {
    if (!character1 || character2 || !combatType) return
    if (isDungeonKey(combatType) && character1.dungeon.dungeonProgress) {
      const randomZone = Object.keys(monsterList)[Math.floor(Math.random() * Object.keys(monsterList).length)]

      setCharacter2(generateMonster(character1, randomZone, combatType))
    } else if (character1.activeJourney?.zone) {
      setCharacter2(generateMonster(character1, character1.activeJourney.zone.name, combatType))
    }
  }, [character1, character2, combatType])

  if (!character1 || !character2 || !combatResult || !loot || combatType) return (
    <p>Spinner...</p>
  )

  return (
    <Display character1={character1} character2={character2} combatLog={combatResult.combatLog} turn={turn} setTurn={setTurn} gold={combatResult.gold} experience={combatResult.experience} loot={loot} />
  )
}