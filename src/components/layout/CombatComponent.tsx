'use client'

import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { combat } from "@/app/functions/combat"
import { parseCombatLog } from "@/app/functions/combatLogParser"
import { getFolderName } from "@/app/functions/getFolderName"
import { applyLoot } from "@/app/functions/manageItems"
import { generateLoot } from "@/app/generators/generateLoot"
import { generateMonster } from "@/app/generators/generateMonster"
import { combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Attributes, Items, LogEntry, Monster, Player } from "@/app/types"
import { HealthBar } from "@/components/layout/HealthBar"
import IconSpinner from "@/components/layout/IconSpinner"
import { ItemFrame } from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"

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
  const [parsedCombatLog, setParsedCombatLog] = useState<string[] | null>(null)
  const [character1Attributes, setCharacter1Attributes] = useState<Attributes | null>(null)
  const [character2Attributes, setCharacter2Attributes] = useState<Attributes | null>(null)
  const [character1, setCharacter1] = useAtom<Player | null>(playerAtom)
  const [character2, setCharacter2] = useState<Monster | null>(null)

  const [isInitialized, setIsInitialized] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [isCombatReady, setIsCombatReady] = useAtom(combatReadyAtom)
  const [dungeon] = useState(false)

  // Page preparation & perform combat
  useEffect(() => {
    if (!character1 || !character1.activeJourney || !character1.activeJourney.zone || !isCombatReady || !character2 || isInitialized) return

    const combatResult = combat(character1, character2, character1.activeJourney.valueMultiplier, dungeon)
    const log = combatResult.combatLog
    const parsedLog = parseCombatLog(log)
    const char1Attributes = calculatePlayerAttributes(character1.equipment, character1.attributes, character1.activePotion)
    const char2Attributes = character2.attributes

    setFinishedCombat(combatResult)
    setCombatLog(log)
    setParsedCombatLog(parsedLog)
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

    console.log(combatResult)

    setIsInitialized(true)
    setIsCombatReady(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character1, character2])

  // Apply monster for a combat
  useEffect(() => {
    if (!character1 || !isCombatReady || !character1.activeJourney || character2 || isInitialized) return
    setCharacter2(generateMonster(character1.level, character1.activeJourney.zone.name))
  }, [character1, character2, isCombatReady, isInitialized])

  // Message for player when page isnt initialized
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    if (isInitialized) {
      if (timeout) {
        clearTimeout(timeout)
      }
      return
    } else {
      timeout = setTimeout(() => {
        setShowMessage(true)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isInitialized])

  // Handler for manual turn changing
  const handleChangeTurn = (action: string) => {
    if (combatLog && action === 'increase') {
      if (turn < combatLog.length - 1) {
        setTurn(turn + 1)
      }
    } else if (action === 'decrease') {
      if (turn > 0) {
        setTurn(turn - 1)
      }
    } else if (combatLog && action === 'skip') {
      setTurn(combatLog.length - 1)
    } else {
      return turn
    }
  }

  if (!isInitialized && !isCombatReady) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
        {showMessage && (
          <h1 className="mt-10 max-w-[350px] text-wrap text-center message-slow-appear">Probably you do not have an active journey combat to perform. Please go for a journey and wait for a combat.</h1>
        )}
      </div>
    )
  }

  if (character1 && character2) return (
    <main className="p-2 flex w-full h-full">
      {/* Attacker section */}
      <section id="attacker-section" className="w-full flex items-center flex-col p-2 max-w-[300px] border">
        <div className="relative w-full h-auto aspect-square border">
          <Image src={`/assets/portraits/${character1.image}`} alt="Player image" fill className="object-cover" unoptimized />
        </div>
        <h1>{character1?.name}</h1>
        <h1>Level: {character1?.level}</h1>
        <HealthBar currentHP={combatLog ? combatLog[turn].HP1 : 0} maxHP={combatLog ? combatLog[turn].maxHP1 : 0} />
        {character1Attributes && Object.entries(character1Attributes).map(([key, value]) => (
          <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
        ))}
      </section>

      {/* Information section */}
      <section className="w-full flex flex-col flex-grow border-t border-b">

        {/* Messages section */}
        <section className="w-full flex flex-col flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">

          {/* Combat logs */}
          {parsedCombatLog?.slice(0, turn + 1).map((entry, index) => (
            <div key={index} className="w-full px-5 py-1 border-b">
              <h1 className="w-full text-center">{index + 1}</h1>
              <span className="">{entry}</span>
            </div>
          ))}

          {/* Loot */}
          {combatLog && turn === combatLog.length - 1 && (
            <div className="flex flex-col p-5">
              <h1>Loot:</h1>
              <h1 className="flex gap-1 justify-center">
                Gold: {gold ?? 0}
                <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized />
              </h1>
              <h1 className="flex gap-1 justify-center">
                Exp: {experience ?? 0}
                <Image width={20} height={20} src="/experience.svg" alt="Experience" unoptimized />
              </h1>
              <div className="flex gap-2 w-full justify-center pt-5 flex-wrap">
                {loot.map((item, index) => (
                  <ItemFrame key={index} itemData={item} isClickable={false} isEquipped={false} width={100} height={100} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Actions section */}
        <section className="w-full items-center justify-center flex gap-2 h-16 flex-shrink-0">
          <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('decrease')}>Previous turn</button>
          <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('increase')}>Next turn</button>
          <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('skip')}>Skip to the end</button>
          <button className="bg-blue-500 p-2 rounded-lg" onClick={() => console.log(loot)}>Clog</button>
        </section>
      </section>

      {/* Defender section */}
      <section className="w-full flex items-center flex-col p-2 max-w-[300px] border">
        <div className="relative w-full h-auto aspect-square border">
          <Image src={`/assets/portraits/${getFolderName(character2.image)}/${character2.image}`} alt="Monster image" fill className="object-cover invertX" unoptimized />
        </div>
        <h1>{character2?.name}</h1>
        <h1>Level: {character2?.level}</h1>
        <HealthBar currentHP={combatLog ? combatLog[turn].HP2 : 0} maxHP={combatLog ? combatLog[turn].maxHP2 : 0} />
        {character2Attributes && Object.entries(character2Attributes).map(([key, value]) => (
          <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
        ))}
      </section>
    </main>
  )
}