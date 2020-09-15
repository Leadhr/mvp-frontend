import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "reactstrap";
import Header from "components/Headers/Header.js";
import Surveywrapper from "../components/Survey/surveywrapper/surveywrapper";

function Survey() {
  return (
    <>
      <Header />
        <Row className="justify-content-center">
          <Col>
            <Surveywrapper />
          </Col>
        </Row>
    </>
  );
}

export default Survey;
