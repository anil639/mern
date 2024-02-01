import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navigationbar = () => {
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/mern/">MERN</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Topics" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/mern/reactJs">
                  ReactJs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/mern/nodeJs">NodeJs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/mern/mongodb">
                  MongoDB
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
