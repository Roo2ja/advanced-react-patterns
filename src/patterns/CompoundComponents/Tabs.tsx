import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext<any>(null);

const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ display: "flex", gap: "10px" }}>{children}</div>;
};

const Tab = ({ index, children }: { index: number; children: React.ReactNode }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button className={`button ${activeTab === index ? "active" : ""}`}  onClick={() => setActiveTab(index)}>
      {children}
    </button>
  );
};

const TabPanels = ({ children }: { children: React.ReactNode }) => {
  const { activeTab } = useContext(TabsContext);
  return <div className="content">{React.Children.toArray(children)[activeTab]}</div>;
};

const TabPanel = ({ children }: { children: React.ReactNode }) => <>{children}</>;

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
