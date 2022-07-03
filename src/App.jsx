import React from "react";
import Homepages from "./pages/Homepages";
import PostView from "./pages/PostView";
import "./global.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepages} />
          <Route path="/postview" component={PostView} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
