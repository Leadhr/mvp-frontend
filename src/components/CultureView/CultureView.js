import React from "react";
import Viz from "../Viz/Viz"
import CultureBox from "../CultureBox/CultureBox"

export default function CultureView() {
  return (
    <div className="CultureView col">
      <div className="row">
        <div className="MainView col">
          <Viz />
        </div>
        <div className="SecondView col">
          <CultureBox />
        </div>
      </div>
    </div>
  );
}
