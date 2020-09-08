import React, { useState } from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";
import {Card } from "reactstrap"
function Survey(props) {
  // if (props.current === 0) {
  //   return (
  //     <div className="col-md-auto justify-content-center">
  //       <InstructionOne setCurrent={props.setCurrent} current={props.current} />
  //     </div>
  //   )
  // } 
  if (props.question) {
    return (
      <Card className="col-md-auto justify-content-center">
        <Prompt current={props.current} question={props.question} />
        <Answerbox setAnswer={props.setAnswer} setCurrent={props.setCurrent} current={props.current} answers={props.question.answers} />
      </Card>
    );
  } else {
    return null;
  }
}

export default Survey;
