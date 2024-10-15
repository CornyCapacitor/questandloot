'use client'

import { combat } from "./combat";
import { parseCombatLog } from "./combatLogParser";
import { dummyEnemy, dummyPlayer } from "./dummies";

export default function Home() {
  const combatLog = combat(dummyPlayer, dummyEnemy).combatLog
  const parsedCombatLog = parseCombatLog(combatLog)
  parsedCombatLog.forEach(entry => {
    console.log(entry)
  })

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Pixel Wars</h1>
    </div>
  );
}