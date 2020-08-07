import React from "react";
import MainView from "../MainView/MainView";
import SecondView from "../SecondView/SecondView";

export default function CultureView() {
  return (
    <div className="CultureView col">
      <div className="row">
        <MainView context="culture"/>
        <SecondView context="culture"/>
      </div>
    </div>
  );
}
