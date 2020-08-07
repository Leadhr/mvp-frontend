import React from "react";
import MainView from "../MainView/MainView";
import SecondView from "../SecondView/SecondView";

export default function WorkStylesTeamView() {
  return (
    <div className="WorkStylesTeamView col">
      <div className="row">
        <MainView context="workstylesteam" />
        <SecondView context="workstylesteam" />
      </div>
    </div>
  );
}
