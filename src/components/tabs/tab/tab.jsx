import { useTabs } from "../tabs"

export function Tab({ label, tabId }) {
  const { currentTab, setTab, onChange } = useTabs()

  console.log(currentTab, tabId)

  const onSelect = () => {
    setTab(tabId)
    onChange(tabId)
  }

  return (
    <button 
      type="button" 
      className={`${tabId === currentTab ? 'active' : ''} tab`} 
      onClick={onSelect}
    >
      {label}
    </button>
  )
}