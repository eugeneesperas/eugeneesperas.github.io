import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./six.css";

const YourComponent = () => {
  return (
    <>
      <div className="sixContainer">
        <Row>
          <Col md={6} className="sixImage">
            <Card>
              <Card.Img variant="top" src="/six/d3.png" />
            </Card>
          </Col>
          <Col md={6} className="sixText">
            <Card>
              <Card.Body>
                <Card.Title>Adobo</Card.Title>
                <Card.Text>
                  Adobo is a popular Filipino dish made with meat marinated in
                  vinegar, soy sauce, garlic, and spices. It is known for its
                  tangy and savory flavors, often enjoyed with steamed rice.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default YourComponent;
