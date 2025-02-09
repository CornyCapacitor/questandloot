import { Player } from "@/app/types"
import { useState } from "react"
import { Items } from "./Items"
import { Materials } from "./Materials"
import { Tabs } from "./Tabs"
import { Tests } from "./Tests"

export type InventoryTabs = 'items' | 'materials' | 'tests'

export const Inventory = ({ player }: { player: Player }) => {
  const [currentTab, setCurrentTab] = useState<InventoryTabs>('items')

  return (
    <section className="flex flex-col h-full flex-grow">
      <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
      {currentTab === 'items' ? (
        <Items player={player} />
      ) : currentTab === 'materials' ? (
        <Materials player={player} />
      ) : currentTab === 'tests' ? (
        <Tests player={player} />
      ) : null}
    </section>
  )
}