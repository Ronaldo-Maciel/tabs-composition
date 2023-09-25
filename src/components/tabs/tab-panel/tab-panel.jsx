import { useTabs } from "../tabs"

export function TabPanel({ children, tabPanelId }) {
  const { currentTab } = useTabs()

  return (
    <div className={`${currentTab === tabPanelId ? 'active' : ''} tab-panel` }>{children}</div>
  )
}