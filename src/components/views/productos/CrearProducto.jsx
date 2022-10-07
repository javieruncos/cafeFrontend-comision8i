import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import {useForm} from 'react-hook-form'

const CrearProducto = () => {

    const {register,handleSubmit,formState:{errors}}= useForm();

    const onSubmit = (data)=>{
      console.log(data)
    }




  return (
    <Container className="my-4">
      <h1>Nuevo Producto</h1>
      <hr />
      <div>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Ej cafe"
            {...register("nombreProducto",{required:true})} />
            <Form.Text className="text-danger">error</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="Ej 100" />
            <Form.Text className="text-danger">error</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej https://images.pexels.com/photos/887850/pexels-photo-887850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Form.Text className="text-danger">error</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Text className="text-danger">error</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CrearProducto;
