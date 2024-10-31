'use client'

import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { applyLoot } from "@/app/functions/manageItems"
import { generateLoot } from "@/app/generators/generateLoot"
import { generateMonster } from "@/app/generators/generateMonster"
import { combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Attributes, Items, LogEntry, Monster, Player } from "@/app/types"
import AvatarFrame from "@/components/layout/AvatarFrame"
import { HealthBar } from "@/components/layout/HealthBar"
import IconSpinner from "@/components/layout/IconSpinner"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { combat } from "./combat"
import { calculateGold } from "./combatCalculations"
import { parseCombatLog } from "./combatLogParser"

type FinishedCombatType = {
  isWin: boolean,
  combatLog: LogEntry[],
  loot: number[] | null
}

const CombatPage = () => {
  const [turn, setTurn] = useState(0)
  const [, setFinishedCombat] = useState<FinishedCombatType | null>(null)
  const [combatLog, setCombatLog] = useState<LogEntry[] | null>(null)
  const [gold, setGold] = useState<number | null>(null)
  const [loot, setLoot] = useState<Items[]>([])
  const [parsedCombatLog, setParsedCombatLog] = useState<string[] | null>(null)
  const [character1Attributes, setCharacter1Attributes] = useState<Attributes | null>(null)
  const [character2Attributes, setCharacter2Attributes] = useState<Attributes | null>(null)
  const [character1, setCharacter1] = useAtom<Player | null>(playerAtom)
  const [character2, setCharacter2] = useState<Monster | null>(null)

  const [isInitialized, setIsInitialized] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [isCombatReady, setIsCombatReady] = useAtom(combatReadyAtom)

  // Page preparation & perform combat
  useEffect(() => {
    if (!character1 || !character1.activeJourney || !isCombatReady || !character2 || isInitialized) return

    const combatResult = combat(character1, character2, character1.activeJourney.valueMultiplier)
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
    const earnedGold = combatResult.loot ? calculateGold(character1.level, character1.activeJourney.valueMultiplier) : null

    setLoot(earnedLoot)
    setGold(earnedGold)

    const lootToApply = applyLoot(earnedLoot, character1)

    setCharacter1({
      ...character1,
      activeJourney: null,
      gold: character1.gold + (earnedGold ?? 0),
      items: lootToApply.items,
      materials: lootToApply.materials
    })

    setIsInitialized(true)
    setIsCombatReady(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character1, character2])

  // Apply monster for a combat
  useEffect(() => {
    if (!character1 || !isCombatReady || character2 || isInitialized) return
    setCharacter2(generateMonster(character1.level))
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
    // Test case
    console.log(loot)
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

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
      <h1>Combat page</h1>
      <div className="flex w-full max-w-[1200px] min-h-[350px] border space-between">

        {/* Attacker section */}
        <section id="attacker-section" className="w-full max-w-[250px] flex flex-col gap-1 items-center text-center border-r p-2">
          <AvatarFrame size={128} image={`/assets/portraits/${character1?.image}`} inverted={false} />
          <h1>{character1?.name}</h1>
          <h1>Level: {character1?.level}</h1>
          <HealthBar currentHP={combatLog ? combatLog[turn].HP1 : 0} maxHP={combatLog ? combatLog[turn].maxHP1 : 0} />
          {character1Attributes && Object.entries(character1Attributes).map(([key, value]) => (
            <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
          ))}
        </section>

        {/* Information section */}
        <section id="information-section" className="w-full flex flex-col">

          {/* Messages section */}
          <section id="messages-section" className="flex-grow h-full p-2 text-wrap text-center overflow-y-auto overflow-hidden">
            {/* <span>{parsedCombatLog && parsedCombatLog[turn]}</span> */}
            <div className="flex flex-col">
              {parsedCombatLog?.slice(0, turn + 1).map((entry, index) => (
                <div key={index}>
                  <h1>Turn: {index + 1}</h1>
                  <span className="border-b p-1">{entry}</span>
                </div>
              ))}
            </div>
            {combatLog && turn === combatLog.length - 1 &&
              <div className="flex flex-col">
                <h1>Loot:</h1>
                <h1>Gold: {gold}</h1>
                <div className="flex gap-2 w-full justify-center text-start flex-wrap">
                  {loot.map((item, index) => (
                    <ItemFrame key={index} itemData={item} isClickable={false} isEquipped={false} isDisabled={false} width={100} height={100} />
                  ))}
                </div>
              </div>
            }
          </section>

          {/* Actions section */}
          <section id="actions-section" className="max-h-[100px] border-t flex gap-3 items-center justify-center p-2">
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('decrease')}>Previous turn</button>
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('increase')}>Next turn</button>
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('skip')}>Skip to the end</button>
          </section>
        </section>

        {/* Defender section */}
        <section id="defender-section" className="w-full max-w-[250px] flex flex-col gap-1 items-center text-center border-l p-2">
          <AvatarFrame size={128} image={`/assets/portraits/${character2?.image}`} inverted={true} />
          <h1>{character2?.name}</h1>
          <h1>Level: {character2?.level}</h1>
          <HealthBar currentHP={combatLog ? combatLog[turn].HP2 : 0} maxHP={combatLog ? combatLog[turn].maxHP2 : 0} />
          {character2Attributes && Object.entries(character2Attributes).map(([key, value]) => (
            <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
          ))}
        </section>
      </div>
    </div>
  )
}

export default CombatPage