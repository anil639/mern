import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HomeData from "../Data/HomeData/HomeData";

const Cards = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center text-center mt-5">
      {HomeData.map((val, id) => (
        <div style={{ marginLeft: "20px", marginBottom: "20px" }} key={id}>
          <Card border="info" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src={val.image}
              className="bg-dark text-white"
            />
            <Card.Body className="bg-dark text-white">
              <Card.Title>{val.title}</Card.Title>
              <Card.Text>{val.text}</Card.Text>

              <Button href={`/${val.button}`} variant="primary">
                Q&A
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cards;
