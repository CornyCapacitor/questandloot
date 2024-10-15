'use client'

import { combat } from "./combat";
import { calculateLoot } from "./combatCalculations";
import { dummyEnemy, dummyPlayer } from "./dummies";

export default function Home() {
  const finishedCombat = combat(dummyPlayer, dummyEnemy, 530)
  // const parsedCombatLog = parseCombatLog(finishedCombat.combatLog)
  // parsedCombatLog.forEach(entry => {
  //   console.log(entry)
  // })
  console.log('Loot:', finishedCombat.loot)
  console.log(calculateLoot(dummyEnemy.loot, 530))

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Pixel Wars</h1>
    </div>
  );
}