import React from "react";
import { Col ,Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardsProducto = ({producto}) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={producto.imagen}  style={{ height:400 }}/>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            categoria: {producto.categoria}
          </Card.Text>
          <Button as={Link} to={`/detalleProducto/${producto._id}`}  variant="danger">ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardsProducto;
