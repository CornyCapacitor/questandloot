export const TabButton = ({ tabName, currentTab, onClick, disabled, className }: { tabName: string, currentTab: string | number, onClick: () => void, disabled?: boolean, className?: string }) => {
  return (
    <button disabled={disabled} className={`rounded-t-sm py-1 px-2 border-t border-l border-r border-slate-700 transition hover:bg-slate-700 ${currentTab === tabName && 'bg-slate-600'} ${className}`} onClick={onClick}>{tabName.charAt(0).toUpperCase() + tabName.slice(1)}</button>
  )
}