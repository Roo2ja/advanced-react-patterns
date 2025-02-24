import React, { useEffect } from "react";

// Higher-Order Component that logs props
const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    useEffect(() => {
      console.log("Component Rendered with Props:", props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
