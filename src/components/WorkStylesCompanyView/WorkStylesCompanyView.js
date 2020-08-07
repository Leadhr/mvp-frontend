import React from "react";
import Head from "../Head/Head";
import Viz from "../Viz/Viz";
import Avatar from "../Avatar/Avatar";
import ThreePlot from "../ThreePlot/ThreePlot";
import AttributeBlock from "../AttributeBlock/AttributeBlock";
import LearnMore from "../LearnMore/LearnMore";

export default function WorkStylesCompanyView() {
  return (
    <div className="WorkStylesCompanyView col">
      <div className="row">
        <div className="MainView col">
          <Head />
          <Viz />
        </div>
        <div className="SecondView col">
          <Avatar />
          <ThreePlot />
          <AttributeBlock />
          <LearnMore />
        </div>
      </div>
    </div>
  );
}
