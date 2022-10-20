import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

const DetalleCard = ({ producto }) => {
  return (
    <Container className="mainSection">
      <Row>
        <Col md={6} className="d-flex shadow">
          <div>
            <img src={producto.imagen} className="w-100" />
          </div>
          <div className="w-100">
            <div className="ms-3">
            <h1>{producto.nombreProducto}</h1>
            <ul>
                <li>{producto.precio}</li>
                <li>{producto.categoria}</li>
            </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleCard;
