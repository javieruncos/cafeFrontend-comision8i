import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { obtenerProductoApi } from '../../../helper/queries';
import DetalleCard from './DetalleCard';

const DetalleProducto = () => {
      

    const [producto, setProducto] = useState([])


  const {id} = useParams()

    useEffect(()=>{
      obtenerProductoApi(id).then((respuesta)=>{
         if(respuesta.status === 200){
            setProducto(respuesta.dato)
            console.log(respuesta.dato)
         }else{
            console.log("error")
         }
      })
    },[])

    return (
        <Container className='my-4'>
           <DetalleCard producto={producto}></DetalleCard>
        </Container>
    );
};

export default DetalleProducto;