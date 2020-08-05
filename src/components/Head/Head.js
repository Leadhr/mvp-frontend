import React from "react";
import "./Head.css";
import HeadNav from "../HeadNav/HeadNav";
import HeadTitle from "../HeadTitle/HeadTitle";
import Blurb from "../Blurb/Blurb";

export default function Head() {
  return (
    <div className="Head">
      <HeadTitle />
      <HeadNav />
      <Blurb />
    </div>
  );
}
