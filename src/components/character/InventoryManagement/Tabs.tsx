import { TabButton } from "../../ui/TabButton"
import { InventoryTabs } from "./Inventory"

export const Tabs = ({ setCurrentTab, currentTab }: { setCurrentTab: (tabName: InventoryTabs) => void, currentTab: InventoryTabs }) => {
  return (
    <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
      <TabButton tabName="items" currentTab={currentTab} onClick={() => setCurrentTab('items')} />
      <TabButton tabName="materials" currentTab={currentTab} onClick={() => setCurrentTab('materials')} />
      <TabButton tabName="tests" currentTab={currentTab} onClick={() => setCurrentTab('tests')} />
    </div>
  )
}