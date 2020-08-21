import React from "react";
import Chart from "chart.js";
import Header from "components/Headers/Header.js";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Line } from "react-chartjs-2";

// core components
import { chartOptions, parseOptions, chartExample1 } from "variables/charts.js";

class Culture extends React.Component {
  

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
                        <Line
                          data={chartExample1.data1}
                          options={chartExample1.options}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
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
