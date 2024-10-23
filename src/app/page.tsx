'use client'

import { useEffect, useState } from "react";
import { generateRandomEquipment } from "./generators/generateEquipment";
import { Armor, Jewelery, Shield, Weapon } from "./types";


export default function Home() {
  const [item, setItem] = useState<Weapon | Jewelery | Armor | Shield | null>(null)

  useEffect(() => {
    const item = generateRandomEquipment(22, 'warrior', 'common')
    setItem(item)
    console.log(item)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Quest & Loot</h1>
    </div>
  );
}