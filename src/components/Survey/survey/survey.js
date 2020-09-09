import React, { useState } from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";
import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";
function Survey(props) {
  const [submitToggle, setSubmitToggle] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    props.setCurrent(props.current + 1);
  }

  function handleChange(e) {
    setSubmitToggle(!submitToggle);
  }

  if (props.current === -2) {
    return (
      <Card className="bg-default col-md-auto justify-content-center">
        <p>Welcome to the Leadhr Work Styles assessment!</p>
        <Form>
          <FormGroup check>
            <Label check>
              <Input onChange={handleChange} type="checkbox" /> I agree to the
              T&C's...blah
            </Label>
          </FormGroup>
          <Button disabled={submitToggle} onClick={handleClick}>
            Start
          </Button>
        </Form>
      </Card>
    );
  } else if (props.current === -1) {
    return (
      <Card className="bg-default col-md-auto justify-content-center">
        <p>instructions</p>
        <Button onClick={handleClick}>Start</Button>
      </Card>
    );
  } else if (props.question) {
    return (
      <Card className="bg-default col-md-auto justify-content-center">
        <Prompt current={props.current} question={props.question} />
        <Answerbox
          answerBank={props.answerBank}
          setAnswer={props.setAnswer}
          setCurrent={props.setCurrent}
          current={props.current}
          answers={props.question.answers}
        />
      </Card>
    );
  } else {
    return null;
  }
}

export default Survey;
