import React from "react";
import ReferenceText from "../ReferenceText/ReferenceText";
import ReferenceHead from "../ReferenceHead/ReferenceHead";

export default function ReferenceView(props) {
  return (
    <div className="MainView col">
      <div className="row">
        <div className="MainView col">
          <ReferenceHead />
          <ReferenceText />
        </div>
        <div className="SecondView col"></div>
      </div>
    </div>
  );
}
