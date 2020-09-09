import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import Header from "components/Headers/Header.js";
import Surveywrapper from "../components/Survey/surveywrapper/surveywrapper";

function Survey() {
  return (
    <>
      <Card className="shadow">
        <Header />
        <Surveywrapper />
      </Card>
    </>
  );
}

export default Survey;
