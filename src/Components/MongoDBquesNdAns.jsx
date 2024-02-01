import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MongoData from "../Data/MongoDBData/MongoData";
const MongoDBquesNdAns = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center text-primary mt-5 mb-5">
            MongoDB Interview Questions
          </h1>
          {MongoData.length > 0 && (
            <ol>
              {MongoData.map((val, id) => (
                <ol key={id}>
                  <h1 className="mb-4">
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

export default MongoDBquesNdAns;
