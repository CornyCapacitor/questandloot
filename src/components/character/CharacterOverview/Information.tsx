import { Player } from "@/app/types"
import { useState } from "react"
import { AttributesTab } from "./AttributesTab"
import { HeroTab } from "./HeroTab"
import { Tabs } from "./Tabs"

export type InformationTabs = 'attributes' | 'hero'

export const Information = ({ player }: { player: Player }) => {
  const [currentTab, setCurrentTab] = useState<'attributes' | 'hero'>('attributes')

  return (
    <section className="flex flex-col flex-grow border-t border-slate-700">
      <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
      {currentTab === 'attributes' ? (
        <AttributesTab player={player} />
      ) : currentTab === 'hero' ? (
        <HeroTab player={player} />
      ) : null}
    </section>
  )
}