import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";
import allData from "../Data/index";

const Navigationbar = () => {
  const [inputValue, setInputvalue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState(true);

  const handleInput = (e) => {
    setInputvalue(e.target.value);
    if (e.target.value === "") {
      setSuggestion([]);
      setDisplay(true);
    } else {
      const filteredData = allData.filter((data) =>
        data.Question.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      );
      setSuggestion(filteredData);
    }
  };
  const handleSuggestion = (v) => {
    setInputvalue(v);
    setResult(v);
    setSuggestion([]);
  };
  const handleSearch = () => {
    setDisplay(!display);
  };

  return (
    <div style={{ position: "relative" }}>
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
                value={inputValue.Question}
                onChange={handleInput}
              />
              <Button onClick={handleSearch} variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          right: 0,
          width: "50%",
          margin: "o auto",
          zIndex: 1000,
        }}
      >
        <ListGroup className="bg-dark">
          {suggestion.length > 0 && (
            <ol>
              {suggestion.map((val, id) => (
                <ListGroup.Item
                  action
                  variant="dark"
                  key={id}
                  onClick={() => handleSuggestion(val)}
                  style={{ cursor: "pointer" }}
                >
                  {val.Question}
                </ListGroup.Item>
              ))}
            </ol>
          )}
        </ListGroup>
        <Container className="bg-dark">
          {!display && result && (
            <div>
              <h4 className="text-info">{result.Question}</h4>
              {result.Answer.split("\n").map((val, id) => (
                <p key={id}>{val}</p>
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Navigationbar;
