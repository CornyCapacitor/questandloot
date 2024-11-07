'use client'

import { Shops } from "@/app/types"
import { TabButton } from "@/components/layout/TabButton"
import { useState } from "react"
import { CharacterEquipmentSection } from "../character/characterComponents"
import Shop from "./shopComponents"

const ShopPage = () => {
  const [shop, setShop] = useState<Shops>('blacksmith')

  return (
    <div className="w-full h-full flex">
      <CharacterEquipmentSection className="h-full flex flex-col flex-shrink-0 border-r border-slate-700" />
      <div className="flex flex-col h-full flex-grow">
        <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
          <TabButton tabName="blacksmith" currentTab={shop} onClick={() => setShop('blacksmith')} />
          <TabButton tabName="alchemist" currentTab={shop} onClick={() => setShop('alchemist')} />
        </div>
        <Shop shop={shop} />
      </div>
    </div>
  )
}

export default ShopPage
