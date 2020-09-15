import React, { useState } from "react";
import Answer from "../answer/answer";
import { Button, Row } from "reactstrap";

function Answerbox(props) {
  const [hidden, setHidden] = useState(4);

  //given num from 0 to 3 hide the one, pass 4 to reset
  function hideAnswer(arg) {
    if (arg === 0) {
      setHidden(0);
    } else if (arg === 1) {
      setHidden(1);
    } else if (arg === 2) {
      setHidden(2);
    } else if (arg === false) {
      setHidden(false);
    }
  }

  function handleBack(e) {
    // if an answer should be hidden, hide it and then go back
    console.log(props.current);
    if (props.current % 2 === 0) {
      setHidden(props.answerBank[props.current - 2]);
    } else {
      setHidden(false);
    }
    props.setCurrent(props.current - 1);
  }

  if (props.answers) {
    return (
      <div>
        {hidden !== 0 ? (
          <>
            <Row className="justify-content-center">
              <Answer
                hideAnswer={hideAnswer}
                setAnswer={props.setAnswer}
                setCurrent={props.setCurrent}
                current={props.current}
                number={0}
                answer={props.answers[0].text}
              />
            </Row>
          </>
        ) : null}

        {hidden !== 1 ? (
          <>
            <Row className="justify-content-center">
              <Answer
                hideAnswer={hideAnswer}
                setAnswer={props.setAnswer}
                setCurrent={props.setCurrent}
                current={props.current}
                number={1}
                answer={props.answers[1].text}
              />
            </Row>
          </>
        ) : null}
        {hidden !== 2 ? (
          <>
            <Row className="justify-content-center">
              <Answer
                hideAnswer={hideAnswer}
                setAnswer={props.setAnswer}
                setCurrent={props.setCurrent}
                current={props.current}
                number={2}
                answer={props.answers[2].text}
              />
            </Row>
          </>
        ) : null}
        <br />
        <Row className="px-lg-5">
          <Button onClick={handleBack}>
            {" "}
            <i className="ni ni-bold-left mr-2" /> Back
          </Button>
        </Row>
      </div>
    );
  } else {
    return null;
  }
}

export default Answerbox;
