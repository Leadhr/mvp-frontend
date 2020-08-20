import React from "react";

import { Radar } from "react-chartjs-2";
import Header from "components/Headers/Header.js";
import { Col, Container, Row } from "reactstrap";

function Culture(props) {
    const data = {
        labels: ['Achieving', 'Caring', 'Commanding', 'Considering', 'Enjoying', 'Exploring', 'Organizing', 'Structuring'],
        datasets: [
          {
            label: 'You',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40, 33]
          },
          {
            label: 'Average Sales Team Member',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100, 80]
          }
        ]
      };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
        <Radar data={data}/>
        </Row>
      </Container>
    </>
  );
}

export default Culture;
