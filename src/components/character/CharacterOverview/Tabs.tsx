import { TabButton } from "../../ui/TabButton"
import { InformationTabs } from "./Information"

export const Tabs = ({ setCurrentTab, currentTab }: { setCurrentTab: (tabName: InformationTabs) => void, currentTab: InformationTabs }) => {
  return (
    <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
      <TabButton tabName="attributes" currentTab={currentTab} onClick={() => setCurrentTab('attributes')} />
      <TabButton tabName="hero" currentTab={currentTab} onClick={() => setCurrentTab('hero')} />
    </div>
  )
}