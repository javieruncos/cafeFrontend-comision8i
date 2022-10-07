import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardsProducto from './productos/CardsProducto';

const Inicio = () => {
    return (
        <Container>
            <div className='text-center my-5'>
               <h1>Bienvenidos</h1>
               <hr />
            </div>
            <Row>
                <CardsProducto/>
            </Row>
        </Container>
    );
};

export default Inicio;