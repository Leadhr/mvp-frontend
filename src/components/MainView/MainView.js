import React from "react";
import Head from "../Head/Head"
import Viz from "../Viz/Viz"
import "./MainView.css"

export default function MainView() {
  return (<div className="MainView col">
      <Head />
      <Viz />
  </div>)
}
