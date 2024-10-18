'use client'

import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"
import PageLoader from "../../../PageLoader"
import { item_list } from "../itemLists/itemList"
import { enemyAtom, playerAtom } from "../state/atoms"
import { Attributes, Enemy, LogEntry, Player } from "../types"
import { combat } from "./combat"
import { calculateTotalStats } from "./combatCalculations"
import { parseCombatLog } from "./combatLogParser"
import { dummyEnemy, dummyPlayer } from "./dummies"
import { HealthBar } from "./HealthBar"

type FinishedCombatType = {
  isWin: boolean,
  combatLog: LogEntry[],
  loot: {
    gold: number,
    loot: number[]
  } | null
}

const CombatPage = () => {
  const [turn, setTurn] = useState(0)
  const [finishedCombat, setFinishedCombat] = useState<FinishedCombatType | null>(null)
  const [combatLog, setCombatLog] = useState<LogEntry[] | null>(null)
  const [parsedCombatLog, setParsedCombatLog] = useState<string[] | null>(null)
  const [character1Attributes, setCharacter1Attributes] = useState<Attributes | null>(null)
  const [character2Attributes, setCharacter2Attributes] = useState<Attributes | null>(null)
  const [character1, setCharacter1] = useAtom<Player | null>(playerAtom)
  const [character2, setCharacter2] = useAtom<Player | Enemy | null>(enemyAtom)

  // Page preparation & perform combat
  useEffect(() => {
    if (!character1 || !character2) return

    const combatResult = combat(dummyPlayer, dummyEnemy, 530)
    const log = combatResult.combatLog
    const parsedLog = parseCombatLog(log)
    const char1Attributes = calculateTotalStats(character1.equipment, character1.attributes, character1.activePotion)
    const char2Attributes = calculateTotalStats(character2.equipment, character2.attributes, character2.activePotion)

    setFinishedCombat(combatResult)
    setCombatLog(log)
    setParsedCombatLog(parsedLog)
    setCharacter1Attributes(char1Attributes ? char1Attributes : null)
    setCharacter2Attributes(char2Attributes ? char2Attributes : null)
  }, [character1, character2])

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

  if (!finishedCombat && !combatLog && !parsedCombatLog && !character1 && !character1Attributes && !character2 && !character2Attributes) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <PageLoader information="Loading combat page..." />
        <button onClick={() => { setCharacter1(dummyPlayer); setCharacter2(dummyEnemy) }}>Click this to change character1 and character2</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1>Combat page</h1>
      <div className="flex w-full max-w-[1200px] min-h-[350px] border space-between">

        {/* Attacker section */}
        <section id="attacker-section" className="w-full max-w-[250px] flex flex-col gap-1 items-center text-center border-r p-2">
          <Image width={128} height={128} src={`/assets/portraits/${character1?.image}`} alt="Character 1 image" className="bg-white rounded-sm" />
          <h1>{character1?.name}</h1>
          <HealthBar currentHP={combatLog ? combatLog[turn].HP1 : 0} maxHP={combatLog ? combatLog[turn].maxHP1 : 0} />
          {character1Attributes && Object.entries(character1Attributes).map(([key, value]) => (
            <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
          ))}
        </section>

        {/* Information section */}
        <section id="information-section" className="w-full flex flex-col">

          {/* Messages section */}
          <section id="messages-section" className="flex-grow p-2 text-wrap text-center">
            <h1>Turn: {turn + 1}</h1>
            <span>{parsedCombatLog && parsedCombatLog[turn]}</span>
            {combatLog && turn === combatLog.length - 1 &&
              <div className="flex flex-col">
                <h1>Loot:</h1>
                <span>Gold: {finishedCombat && finishedCombat.loot && finishedCombat.loot.gold}</span>
                <div className="flex gap-1 items-center justify-center">
                  {finishedCombat && finishedCombat.loot && finishedCombat.loot.loot.map((loot, index) => (
                    <span key={index}>{item_list[loot].name}</span>
                  ))}
                </div>
              </div>
            }
          </section>

          {/* Actions section */}
          <section id="actions-section" className="h-20 border-t flex gap-3 items-center justify-center p-2">
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('decrease')}>Previous turn</button>
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('increase')}>Next turn</button>
            <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn('skip')}>Skip to the end</button>
          </section>
        </section>

        {/* Defender section */}
        <section id="defender-section" className="w-full max-w-[250px] flex flex-col gap-1 items-center text-center border-l p-2">
          <Image width={128} height={128} src={`/assets/portraits/${character2?.image}`} alt="Character 2 image" className="bg-white rounded-sm" />
          <h1>{character2?.name}</h1>
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