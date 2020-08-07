import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CultureView from "./components/CultureView/CultureView";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="d-flex row">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={CultureView}></Route>
            <Route path="/culture" component={CultureView}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
