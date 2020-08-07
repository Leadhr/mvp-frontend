import React from "react";
import Head from "../Head/Head";
import Viz from "../Viz/Viz";
import Avatar from "../Avatar/Avatar";
import ThreePlot from "../ThreePlot/ThreePlot";
import AttributeBlock from "../AttributeBlock/AttributeBlock";
import LearnMore from "../LearnMore/LearnMore";
import Search from "../Search/Search";

export default function WorkStylesIndividualView() {
  return (
    <div className="WorkStylesIndividualView col">
      <div className="row">
        <div className="MainView col">
          <Head />
          <Viz />
        </div>
        <div className="SecondView col">
          <Avatar />
          <Search />
          <ThreePlot />
          <AttributeBlock />
          <LearnMore />
        </div>
      </div>
    </div>
  );
}
