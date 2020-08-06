import React from "react";
import "./Head.css";
import HeadNav from "../HeadNav/HeadNav";
import HeadTitle from "../HeadTitle/HeadTitle";
import HeadBlurb from "../HeadBlurb/HeadBlurb";

export default function Head() {
  return (
    <div className="Head">
      <HeadTitle />
      <HeadNav />
      <HeadBlurb />
    </div>
  );
}
