/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const TabsContext = createContext(null)

export function Tabs({ activedTab, onChange, children }) {
  const [currentTab, setTab ] = useState(activedTab)

  return (
    <TabsContext.Provider value={{ currentTab, setTab, onChange }}>
      {children}
    </TabsContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTabs() {
  const context = useContext(TabsContext)

  // console.log(context)s

  if (context == null) {
    throw new Error('No TabsContext provided')
  }

  return context;
}