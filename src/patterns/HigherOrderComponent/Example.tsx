import React from "react";
import withLogger from "./withLogger";

const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

const EnhancedButton = withLogger(Button);

const Example = () => {
  return <EnhancedButton label="Click Me" />;
};

export default Example;
