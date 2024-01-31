import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NodeData from "../Data/NodeJs/NodeData";
const NodeQuesNdAns = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center text-primary mt-5 mb-5">
            Node Js Interview Questions
          </h1>
          {NodeData.length > 0 && (
            <ol>
              {NodeData.map((val, id) => (
                <ol key={id}>
                  <h1>
                    {id + 1 + "."}
                    {val.Question}
                  </h1>
                  <h5>
                    {val.Answer.split("\n").map((val, id) => (
                      <p key={id}>{val}</p>
                    ))}
                  </h5>
                </ol>
              ))}
            </ol>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default NodeQuesNdAns;
