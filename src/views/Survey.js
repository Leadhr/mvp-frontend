import React from "react";
import { Button, Card, CardBody, CardText, Col, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";

function Survey() {
  return (
    <>
      <Header />
      <Card className="shadow">
        <CardBody>
          <Container>
            <Row className="justify-content-center">
              <Col className="col-6">
              <Card className="bg-default">
                    <CardBody>
                      <CardText style={{color: "white"}}>
                        <p>Keep these things in mind before you get started:</p>
                        <p>1) Think about how you typically behave at work</p>
                        <p>2) Don't overthink it - some choices may seem odd or repetitive, just pick the word or phrase that best desribes you</p>
                        <p>3) It should take about 10 minutes to complete, so try to answer all the questions in one go
                        </p>
                        <Row className="justify-content-center">
                        <Button>Ok, got it</Button>
                        </Row>
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}

export default Survey;
