import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css"

import Dashboard from "./Dashboard";
import Diet from "./Diet";

function App() {
  console.log("render");
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/diet" exact component={Diet} />
    </BrowserRouter>
  );
}

export default App;
