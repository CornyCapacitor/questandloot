'use client'

import { CharacterEquipmentSection } from "../character/characterComponents"
import Shop from "./shopComponents"

const ShopPage = () => {
  return (
    <div className="w-full h-full flex">
      <CharacterEquipmentSection className="h-full flex flex-col flex-shrink-0 border-r border-slate-700" />
      <Shop className="" />
    </div>
  )
}

export default ShopPage
