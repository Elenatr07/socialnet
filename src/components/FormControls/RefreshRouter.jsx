import React, { useCallback, useEffect } from "react";
import { Navigate, Route } from "react-router-dom";


const RefreshRoute = ({
    component: Component,
    redirectionPath,
    ...rest
  }: Props) => {
    redirectionPath = redirectionPath ?? '/';
    const perf = performance.getEntriesByType('navigation')[0].toJSON();
    const reloadType = perf.type !== 'reload';
  
    const handler = useCallback((e) => {
      e.preventDefault();
      e.returnValue = '';
      return true;
    }, []);
  
    useEffect(() => {
      window.onbeforeunload = handler;
  
      return () => {
        window.onbeforeunload = handler;
      };
    });
    return (
      <>
        {reloadType ? (
          <Route component={Component} {...rest} />
        ) : (
          <Navigate to={redirectionPath} />
        )}
      </>
    );
  };
  export default RefreshRoute;