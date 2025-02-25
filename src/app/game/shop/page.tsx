'use client'

import { playerAtom } from "@/app/state/atoms"
import { Overview } from "@/components/character/CharacterOverview/Overview"
import { Shop } from "@/components/shop/Shop"
import { Tabs } from "@/components/shop/Tabs"
import { useAtom } from "jotai"
import { useState } from "react"

export type ShopTabs = 'blacksmith' | 'alchemist'

const ShopPage = () => {
  const [player] = useAtom(playerAtom)
  const [currentTab, setCurrentTab] = useState<ShopTabs>('blacksmith')

  if (player) return (
    <div className="w-full h-full flex">
      <Overview player={player} className="hidden lg:flex" />
      <div className="flex flex-col h-full flex-grow">
        <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <Shop shop={currentTab} player={player} />
      </div>
    </div>
  )
}

export default ShopPage
