import React from "react";
import Chart from "chart.js";
import Header from "components/Headers/Header.js";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Scatter } from "react-chartjs-2";

// core components
import { chartOptions, parseOptions } from "variables/charts.js";

class Culture extends React.Component {
  data = {
    labels: ["Scatter"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [
          { x: 55, y: -97 },
          { x: -76, y: -84 },
          { x: 72, y: -69 },
          { x: -44, y: 55 },
          { x: -74, y: -16 },
          { x: -50, y: -65 },
          { x: 25, y: 9 },
        ],
      },
    ],
  };

  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: -100,
            max: 100,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: -100,
            max: 100,
          },
        },
      ],
    },
  };

  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  render() {
    return (
      <>
        <Header />
        <Card className="shadow">
          <CardBody>
            <Container>
              <Row>
                <Col>
                  <Card className="bg-default">
                    <CardBody>
                      <div className="chart">
                        {/* Chart wrapper */}
                        <Scatter data={this.data} options={this.options} />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <h3>Intended Culture</h3>
                  <p className="description">
                    Needs copy. Wireframe didn't have a complete sentence. Raw
                    denim you probably haven't heard of them jean shorts Austin.
                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                  </p>
                  <br />
                  <br />
                  <h3>Actual Culture</h3>
                  <p className="description">
                    Needs copy. Wireframe didn't have a complete sentence. Raw
                    denim you probably haven't heard of them jean shorts Austin.
                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                  </p>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Culture;
