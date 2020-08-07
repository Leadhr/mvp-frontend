import React from "react";
import MainView from "../MainView/MainView";
import SecondView from "../SecondView/SecondView";

export default function WorkStylesIndividualView() {
  return (
    <div className="WorkStylesIndividualView col">
      <div className="row">
        <MainView context="workstylesindividual" />
        <SecondView context="workstylesindividual" />
      </div>
    </div>
  );
}
