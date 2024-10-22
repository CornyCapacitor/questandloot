'use client'

import { useEffect, useState } from "react";
import { generateWeapon } from "./generators/generateEquipment";
import { Weapon } from "./types";


export default function Home() {
  const [generatedWeapon, setGeneratedWeapon] = useState<Weapon | null>(null)

  useEffect(() => {
    const weapon = generateWeapon(10, 'warrior', 'common')
    console.log('Weapon:', weapon)
    setGeneratedWeapon(weapon)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Quest & Loot</h1>
    </div>
  );
}