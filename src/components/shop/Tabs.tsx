import { ShopTabs } from "@/app/game/shop/page"
import { TabButton } from "../ui/TabButton"

export const Tabs = ({ setCurrentTab, currentTab }: { setCurrentTab: (tabName: ShopTabs) => void, currentTab: ShopTabs }) => {
  return (
    <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
      <TabButton tabName="blacksmith" currentTab={currentTab} onClick={() => setCurrentTab('blacksmith')} />
      <TabButton tabName="alchemist" currentTab={currentTab} onClick={() => setCurrentTab('alchemist')} />
    </div>
  )
}