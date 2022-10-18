import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { consultarApi } from '../../../helper/queries';
import CardsProducto from './CardsProducto';

const DetalleProducto = () => {

    

    return (
        <Container className='my-4'>
            <CardsProducto/>
        </Container>
    );
};

export default DetalleProducto;