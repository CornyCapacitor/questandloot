'use client'

import { generateWeapon } from "./generators/generateEquipment";

export default function Home() {
  console.log(generateWeapon(10, 'warrior', 'common'))
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Quest & Loot</h1>
    </div>
  );
}