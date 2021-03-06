/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
 
  Card,
  CardHeader,
  CardFooter,
  
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  
  Table,
  Container,
  Row,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class MyTeam extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">My Team</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Email</th>
                      <th scope="col">Results</th>
                      <th scope="col">Send Assesment</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 1</span>
                        </Media>
                      </th>
                      <td>Founder and CEO</td>
                      <td>
                        <span>name1@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 2</span>
                        </Media>
                      </th>
                      <td>Founder and CEO</td>
                      <td>
                        <span>name2@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 3</span>
                        </Media>
                      </th>
                      <td>employee</td>
                      <td>
                        <span>name3@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 4</span>
                        </Media>
                      </th>
                      <td>something different</td>
                      <td>
                        <span>name4@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 5</span>
                        </Media>
                      </th>
                      <td>CTO</td>
                      <td>
                        <span>name1@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <span className="mb-0 text-sm">Name 6</span>
                        </Media>
                      </th>
                      <td>CFO</td>
                      <td>
                        <span>name1@test.com</span>
                      </td>
                      <td>
                        <span>link to results</span>
                      </td>
                      <td>
                        <span>link to send assessment</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          </Container>
      </>
    );
  }
}

export default MyTeam;
