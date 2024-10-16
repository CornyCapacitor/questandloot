'use client'

import { combat } from "./combat";
import { parseCombatLog } from "./combatLogParser";
import { dummyEnemy, dummyPlayer } from "./dummies";

export default function Home() {
  const finishedCombat = combat(dummyPlayer, dummyEnemy, 530)
  const parsedCombatLog = parseCombatLog(finishedCombat.combatLog)
  console.log(parsedCombatLog)
  console.log('Winner:', finishedCombat.winner)
  console.log('Loot:', finishedCombat.loot)

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Pixel Wars</h1>
    </div>
  );
}