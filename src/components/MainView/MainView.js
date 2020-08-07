import React from "react";
import Head from "../Head/Head";
import Viz from "../Viz/Viz";
import ReferenceText from "../ReferenceText/ReferenceText";
import "./MainView.css";

export default function MainView(props) {
  if (props.context === "culture") {
    return (
      <div className="MainView col">
        <Viz />
      </div>
    );
  } else if (props.context === "reference") {
    return (
      <div className="MainView col">
        <ReferenceText />
      </div>
    );
  } else if (
    props.context === "workstylescompany" ||
    props.context === "workstylesindividual" ||
    props.context === "workstylesteam"
  ) {
    return (
      <div className="MainView col">
        <Head />
        <Viz />
      </div>
    );
  } else {
    return null;
  }
}
