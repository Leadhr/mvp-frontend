import React from "react";
import "./SecondView.css";
import CultureBox from "../CultureBox/CultureBox";
import LearnMore from "../LearnMore/LearnMore";
import ThreePlot from "../ThreePlot/ThreePlot";
import AttributeBlock from "../AttributeBlock/AttributeBlock";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import TeamWrapper from "../TeamWrapper/TeamWrapper"

export default function SecondView(props) {
  if (props.context === "culture") {
    return (
      <div className="SecondView col">
        <CultureBox />
      </div>
    );
  } else if (props.context === "workstylescompany") {
    return (
      <div className="SecondView col">
        <Avatar />
        <ThreePlot />
        <AttributeBlock />
        <LearnMore />
      </div>
    );
  } else if (props.context === "workstylesindividual") {
    return (
      <div className="SecondView col">
        <Avatar />
        <Search />
        <ThreePlot />
        <AttributeBlock />
        <LearnMore />
      </div>
    );
  } else if (props.context === "workstylesteam") {
    return (
      <div className="SecondView col">
        <Avatar />
        <Search />
        <TeamWrapper />
      </div>
    );
  } else {
    return <div className="SecondView col"></div>;
  }
}
