import React from "react";
import ReferenceText from "../ReferenceText/ReferenceText";

export default function ReferenceView(props) {
  return (
    <div className="MainView col">
      <div className="row">
        <div className="MainView col">
          <ReferenceText />
        </div>
        <div className="SecondView col"></div>
      </div>
    </div>
  );
}
