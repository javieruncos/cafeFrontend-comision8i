import React from "react";
import { Col ,Card,Button} from "react-bootstrap";

const CardsProducto = () => {
  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/887850/pexels-photo-887850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardsProducto;
