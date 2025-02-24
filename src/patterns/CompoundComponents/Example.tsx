import React from "react";
import Tabs from "./Tabs";

const Example = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
        <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Content of Tab 1</Tabs.Panel>
        <Tabs.Panel>Content of Tab 2</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export default Example;
