import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { consultarApi } from '../../helper/queries';
import CardsProducto from './productos/CardsProducto';

const Inicio = () => {
     
     const [arregloProducto, setArregloProducto] = useState([])


     useEffect(()=>{
       consultarApi().then((respuesta)=>{
           setArregloProducto(respuesta.productos)
       })
     },[])




    return (
        <Container>
            <div className='text-center my-5'>
               <h1>Bienvenidos</h1>
               <hr />
            </div>
            <Row>
                {
                    arregloProducto.map((item)=><CardsProducto producto={item} key={item._id}/>)
                }
            </Row>
        </Container>
    );
};

export default Inicio;