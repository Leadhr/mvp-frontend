import React from "react";
import classnames from "classnames";
import Header from "components/Headers/Header.js";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

class Reference extends React.Component {
  state = {
    tabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
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
                <i className="ni ni-books mr-2" />
                Definitions
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
                <i className="ni ni-chart-bar-32 mr-2" />
                The Model
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1">
                <p className="description">
                  Each work style describes the different values, interests, and
                  preferences that shape who we are. These styles reflect the
                  types of thoughts and behavior that tend to give us energy,
                  help us achieve our goals, and shape how we see ourselves. All
                  eight styles are equally valid - there is no "right answer" -
                  and we each display all eight styles in one form or another.
                  The assessment you completed reflects the fact that as we go
                  about our day, we are continually prioritizing a certain way
                  of being that shapes how we get along with others, how we get
                  things done, and how we find meaning in life. Accordingly, it
                  is the order of the styles that is most important in
                  determining your individual profile. To learn more about each
                  individual style, read below:
                </p>
                <h3>Achieving</h3>
                <p className="description">
                  The Achieving style describes individuals who are primarily
                  focused on results and getting things done. They tend to be
                  goal-oriented and driven, and enjoy seeing the tangible
                  outcome of their work.
                </p>
                <h3>Caring</h3>
                <p className="description">
                  The Caring style describes those who are primarily focused on
                  building warm, authentic relationships with those around them.
                  They tend to be considerate, collaborative, and focused on
                  relationships.
                </p>
                <h3>Commanding</h3>
                <p className="description">
                  The Commanding style describes those who are bold and
                  decisive. They find it easy to take charge, and tend to enjoy
                  work that allows them to influence others and have an impact.
                </p>
                <h3>Considering</h3>
                <p className="description">
                  The Considering style describes individuals who see
                  connectedness in the world and are motivated by working toward
                  a greater cause. They tend to be community-oriented,
                  altruistic, and compassionate.
                </p>
                <h3>Enjoying</h3>
                <p className="description">
                  The Enjoying style describes individuals who are interested in
                  variety and new experiences. They tend to be cheerful,
                  optimistic, and laid back, and are motivated by work they find
                  inherently fun.
                </p>
                <h3>Exploring</h3>
                <p className="description">
                  The Exploring style describes those who are inquisitive,
                  curious, and interested in new ideas. They tend to enjoy
                  finding new ways to do things and exploring new options and
                  opportunities in their work.
                </p>
                <h3>Organizing</h3>
                <p className="description">
                  The Organizing style describes individuals who tend approach
                  work in a methodical and orderly way. They tend to be
                  cooperative, dependable, self-disciplined, and less interested
                  in the spotlight.
                </p>
                <h3>Structuring</h3>
                <p className="description">
                  The Structuring style describes those who are skilled at
                  planning and preparing. They are consistent and realistic, and
                  they enjoy being able to apply structure to situations to get
                  things done in an efficient way.
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  The work styles model is based on 60 years of organizational
                  psychology research, combining the best of the Competing
                  Values Framework and the Theory of Basic Human Values. The
                  assessment you completed was designed to help identify and
                  measure the values, interests, and preferences that inform how
                  we are likely to "show up" in a work setting. Results are
                  plotted on this model to help build insight into how we tend
                  to relate to other people and how we tend to respond to
                  change, two factors that broadly shape who we are and how we
                  think. As such, there are two key dimensions to the model
                  below.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Reference;
