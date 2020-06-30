import React from "react";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes";

function Root(props) {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default Root;
