import React from "react";
import {Button } from "reactstrap"

function Answer(props) {
  function handleClick(e) {
    e.preventDefault();
    //if even
    if (props.current % 2 === 0) {
      props.hideAnswer(props.number);
      props.setAnswer(props.number, props.current);
      props.setCurrent(props.current + 1);
      //if odd
    } else {
      props.setAnswer(props.number, props.current);
      props.setCurrent(props.current + 1);
      //show all
      props.hideAnswer(false);
    }
  }

  if (props.answer) {
    return (
      <Button
        block
        onClick={handleClick}
        className="answer w-75 d-flex justify-content-center"
      >
        {props.answer}
      </Button>
    );
  } else {
    return null;
  }
}

export default Answer;
