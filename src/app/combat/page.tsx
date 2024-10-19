'use client'

import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"
import PageLoader from "../../../PageLoader"
import { item_list } from "../db/itemList"
import { enemyAtom, playerAtom } from "../state/atoms"
import { Attributes, LogEntry, Monster, Player } from "../types"
import { combat } from "./combat"
import { parseCombatLog } from "./combatLogParser"
import { dummyPlayer } from "./dummies"
import { generateMonster } from "./generateMonster"
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
  const [character2, setCharacter2] = useAtom<Monster | null>(enemyAtom)

  // Page preparation & perform combat
  useEffect(() => {
    if (!character1 || !character2) return

    const combatResult = combat(character1, character2, 530)
    const log = combatResult.combatLog
    const parsedLog = parseCombatLog(log)
    const char1Attributes = character1.attributes
    const char2Attributes = character2.attributes

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
        <button onClick={() => { setCharacter1(dummyPlayer); setCharacter2(generateMonster(dummyPlayer.level)) }}>Click this to fight random enemy</button>
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
          <section id="messages-section" className="flex-grow max-h-64 p-2 text-wrap text-center overflow-y-auto overflow-hidden">
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
                <span>Gold: {finishedCombat && finishedCombat.loot && finishedCombat.loot.gold}</span>
                {finishedCombat && finishedCombat.loot && (() => {
                  const lootCount: { [key: string]: number } = {}

                  finishedCombat.loot.loot.forEach(lootItem => {
                    if (lootCount[lootItem]) {
                      lootCount[lootItem] += 1
                    } else {
                      lootCount[lootItem] = 1
                    }
                  });

                  return (
                    <div className="flex flex-col">
                      {Object.keys(lootCount).map((lootItem, index) => {
                        const itemId = Number(lootItem)
                        return (
                          <div key={index} className="flex gap-2 self-center items-center justify-center">
                            <Image height={32} width={32} alt="" src={`/assets/materials/${item_list[itemId]?.image}`} />
                            <span className={item_list[itemId]?.quality === 'epic' ? 'text-violet-500' : item_list[itemId]?.quality === 'rare' ? 'text-blue-500' : item_list[itemId]?.quality === 'uncommon' ? 'text-green-500' : ''}>{item_list[itemId]?.name} x{lootCount[itemId]}</span>
                          </div>
                        );
                      })}
                    </div>
                  )
                })()}
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
          <Image width={128} height={128} src={`/assets/portraits/${character2?.image}`} alt="Character 2 image" className="bg-white rounded-sm invertX" />
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