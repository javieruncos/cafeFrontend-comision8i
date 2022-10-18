import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { consultarApi } from '../../helper/queries';
import CardsProducto from './productos/CardsProducto';

const Inicio = () => {
     
     const [arregloProducto, setArregloProducto] = useState([])


     useEffect(()=>{
       consultarApi().then((respuesta)=>{
           setArregloProducto(respuesta)
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
                    arregloProducto.map((item,indice)=><CardsProducto producto={item} key={indice}/>)
                }
            </Row>
        </Container>
    );
};

export default Inicio;