import React, { useState, useEffect } from "react";
import { Col, Card, Progress, Row, Container } from "reactstrap";
import Survey from "../survey/survey";
import Submission from "../submission/submission";

function Surveywrapper() {
  const [complete, setComplete] = useState(false);
  const [questionBank, setQuestionBank] = useState([]);
  const [answerBank, setAnswerBank] = useState(Array(112).fill(null));
  const [current, setCurrent] = useState(-2);
  //holds response data from submission attempt
  const [submitData, setSubmitData] = useState([]);

  //reset survey
  function resetSurvey() {
    setCurrent(-2);
    setAnswerBank(Array(112).fill(null));
    setComplete(false);
  }

  //takes two args, answer and index
  function handleSetAnswer(answer, index) {
    let copy = [...answerBank];
    copy[index] = answer;
    setAnswerBank(copy);
  }

  function handleSetCurrent(num) {
    setCurrent(num);
  }

  function submitAnswers(name) {
    console.log("submitted");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, answers: answerBank }),
    };
    fetch("http://localhost:4000/answers", requestOptions)
      .then((response) => response.json())
      .then((data) => setSubmitData([...submitData].push(data.id)));
    setComplete(true);
  }

  useEffect(() => {
    if (current >= 112) {
      setComplete(true);
    }
  }, [current]);

  //fetch questions
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data);
      })
      .catch(console.log);
  }, []);

  if (!complete) {
    return (
      <Container style={{ height: "45vh" }}>
        <Row className="justify-content-center ">
          <Col sm="5">
            <Survey
              answerBank={answerBank}
              setAnswer={handleSetAnswer}
              setCurrent={handleSetCurrent}
              current={current}
              question={questionBank[Math.floor(current / 2)]}
            />
            <div>
              <br />
              <Progress max="112" value={current} color="info" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Submission
        complete={complete}
        resetSurvey={resetSurvey}
        submitAnswers={submitAnswers}
      />
    );
  }
}

export default Surveywrapper;
