import React from "react";
import Chart from "chart.js";
import classnames from "classnames";
import { Line } from "react-chartjs-2";

// core components
import { chartOptions, parseOptions, chartExample1 } from "variables/charts.js";
// reactstrap components
import {
  Card,
  CardBody,
  Col,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Row,
  TabContent,
  TabPane,
  Container,
} from "reactstrap";
import Header from "components/Headers/Header";

class WorkStyles extends React.Component {
  data = {
    labels: [
      "Achieving",
      "Caring",
      "Commanding",
      "Considering",
      "Enjoying",
      "Exploring",
      "Organizing",
      "Structuring",
    ],
    datasets: [
      {
        label: "You",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40, 33],
      },
      {
        label: "Average Sales Team Member",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100, 80],
      },
    ],
  };
  state = {
    tabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
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
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-building mr-2" />
                Company
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-chat-round mr-2" />
                Teams
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3,
                })}
                onClick={(e) => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-circle-08 mr-2" />
                Individual
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <Container>
                  <h3>
                    Visualize your company's work styles to verbalize areas to
                    celebrate and pinpoint areas to focus on.
                  </h3>
                  <br />
                  <br />
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
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Stability</span>
                          </div>
                          <div className="progress-percentage">
                            <span>70%</span>
                          </div>
                        </div>
                        <Progress max="100" value="70" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on
                          stability and conservation in the face of change. They
                          tend to value steadiness, durability, and highly
                          results-oriented environments where productivity and
                          winning shape the culture.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Independence</span>
                          </div>
                          <div className="progress-percentage">
                            <span>60%</span>
                          </div>
                        </div>
                        <Progress max="100" value="60" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on tasks,
                          being indepenent, accomplishing goals, and taking
                          action.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Competition</span>
                          </div>
                          <div className="progress-percentage">
                            <span>50%</span>
                          </div>
                        </div>
                        <Progress max="100" value="50" color="default" />
                        <p className="description">
                          Needs copy. Wireframe didn't have a complete sentence.
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="tabs2">
                <Container>
                  <h3>
                    Visualize each team's culture within your company to see how
                    to optimize performance within and between teams.
                  </h3>
                  <br />
                  <br />
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
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Stability</span>
                          </div>
                          <div className="progress-percentage">
                            <span>70%</span>
                          </div>
                        </div>
                        <Progress max="100" value="70" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on
                          stability and conservation in the face of change. They
                          tend to value steadiness, durability, and highly
                          results-oriented environments where productivity and
                          winning shape the culture.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Independence</span>
                          </div>
                          <div className="progress-percentage">
                            <span>60%</span>
                          </div>
                        </div>
                        <Progress max="100" value="60" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on tasks,
                          being indepenent, accomplishing goals, and taking
                          action.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Competition</span>
                          </div>
                          <div className="progress-percentage">
                            <span>50%</span>
                          </div>
                        </div>
                        <Progress max="100" value="50" color="default" />
                        <p className="description">
                          Needs copy. Wireframe didn't have a complete sentence.
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="tabs3">
                <Container>
                  <h3>
                    Look at individuals to see their unique strengths. Look at
                    their team's sphere to see how they compare to the rest of their team.
                  </h3>
                  <br />
                  <br />
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
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Stability</span>
                          </div>
                          <div className="progress-percentage">
                            <span>70%</span>
                          </div>
                        </div>
                        <Progress max="100" value="70" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on
                          stability and conservation in the face of change. They
                          tend to value steadiness, durability, and highly
                          results-oriented environments where productivity and
                          winning shape the culture.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Independence</span>
                          </div>
                          <div className="progress-percentage">
                            <span>60%</span>
                          </div>
                        </div>
                        <Progress max="100" value="60" color="default" />
                        <p className="description">
                          Your organization tends to be more focused on tasks,
                          being indepenent, accomplishing goals, and taking
                          action.
                        </p>
                      </div>
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <div className="progress-label">
                            <span>Competition</span>
                          </div>
                          <div className="progress-percentage">
                            <span>50%</span>
                          </div>
                        </div>
                        <Progress max="100" value="50" color="default" />
                        <p className="description">
                          Needs copy. Wireframe didn't have a complete sentence.
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default WorkStyles;
