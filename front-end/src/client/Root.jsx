import React from "react";
import { HashRouter } from "react-router-dom";
import App from "../shared/App";

const Root = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  );
};

export default Root;
