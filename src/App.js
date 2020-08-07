import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CultureView from "./components/CultureView/CultureView";
import ReferenceView from "./components/ReferenceView/ReferenceView";
import WorkStylesCompanyView from "./components/WorkStylesCompanyView/WorkStylesCompanyView";
import WorkStylesIndividualView from "./components/WorkStylesIndividualView/WorkStylesIndividualView"
import WorkStylesTeamView from "./components/WorkStylesTeamView/WorkStylesTeamView"

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="d-flex row">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={CultureView}></Route>
            <Route path="/culture" component={CultureView}></Route>
            <Route path="/reference" component={ReferenceView}></Route>
            <Route path="/workstylescompany" component={WorkStylesCompanyView}></Route>
            <Route path="/workstylesindividual" component={WorkStylesIndividualView}></Route>
            <Route path="/workstylesteam" component={WorkStylesTeamView}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
