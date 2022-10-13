import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import {useForm} from 'react-hook-form'

const CrearProducto = () => {

    const {register,handleSubmit,formState:{errors}}= useForm();

    const onSubmit = (data)=>{
      console.log(data)
      // enviar una peticion a la API
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
            {...register("nombreProducto",{
              required:"El nombre del producto es un dato obligatorio",
              minLength:{
                value:2,
                message:"La cantidad minima de caracteres debe ser 2"
              },
              maxLength:{
                value:100,
                message:"La cantidad maxima de caracteres es 100"
              }
            })} 
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" 
            placeholder="Ej 100" 
            {...register("precio",{
              required:"El precio es un valor obligatorio",
              min:{
                value:50,
                message:"El precio minimo es 50"
              },
              max:{
                value:10000,
                message:"El precio maximo deber ser de $10000"
              }
            })}/>
            <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej https://images.pexels.com/photos/887850/pexels-photo-887850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              {...register("imagen",{
                required:"La URL de la imagen es obligatorio",
                pattern:{
                  value:/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message:"Debe ingresar una URL valida"
                }
              })}
            />
            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Selecciona una opcion"
            {...register("categoria",{
              required:"Debe seleccionar una categoria"
            })}
            >
              <option value="">Selecciona una opcion</option>
              <option value="Bebida caliente">Bebida Caliente</option>
              <option value="Bebida fria">Bebida Fria</option>
              <option value="Dulce">Dulces</option>
              <option value="Salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CrearProducto;
