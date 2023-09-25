import './App.css'
import { Tabs } from './components/tabs/tabs'
import { Tab } from './components/tabs/tab/tab'
import { TabPanel } from './components/tabs/tab-panel/tab-panel'

function App() {

  const onTabsChanged = (tabName) => {
    console.log('the tabs changed', tabName)
  }

  return (
  <Tabs onChange={onTabsChanged} activedTab="bar">
    <Tab label="Foo" tabId="foo"></Tab>
    <Tab label="Bar" tabId="bar"></Tab>
    <TabPanel tabPanelId="foo">
      My content Foo
    </TabPanel>
    <TabPanel tabPanelId="bar">
      My content Bar
    </TabPanel>
  </Tabs>
  )
}

export default App
