import React from "react";
import "./Head.css";
import HeadNav from "../HeadNav/HeadNav";
import HeadTitle from "../HeadTitle/HeadTitle";

export default function Head() {
  return (
    <div className="Head">
      <HeadTitle />
      <HeadNav />
    </div>
  );
}
