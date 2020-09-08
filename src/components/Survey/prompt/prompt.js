import React from "react";
import { Row } from "reactstrap";
import "./prompt.css";

function Prompt(props) {
  if (props.question) {
    return (
      <Row className="justify-content-center">
        <p>
          {" "}
          {props.question.number}. {props.question.question}
        </p>
      </Row>
    );
  } else {
    return null;
  }
}

export default Prompt;
