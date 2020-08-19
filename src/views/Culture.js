import React from "react";

import Header from "components/Headers/Header.js";
import { Col, Container, Row } from "reactstrap";

function Culture(props) {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <span>1 of 2</span>
          </Col>
          <Col><span>2 of 2</span></Col>
        </Row>
      </Container>
    </>
  );
}

export default Culture;
