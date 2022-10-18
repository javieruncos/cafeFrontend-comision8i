import { Container, Button, Form } from "react-bootstrap";
import {useForm} from "react-hook-form"

const EditarProducto = () => {

   const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit =(data)=>{
      console.log(data)
    }



  return (
    <Container className="my-4 mainSection">
      <h1>Editar Producto</h1>
      <hr />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Ej cafe" 
            {...register("nombreProducto",{
              required:"Este campo es obligatorio",
              minLength:{
                value:2,
                message:"el numero minimo de caracteres es de 2"
              },
              maxLength:{
                value:100,
                message:"El numero maximo de caracteres es de 100"
              }
            })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Ej 100" 
            {...register("precio",{
              required:"Este campo es obligatorio",
              min:{
                value:50,
                message:"el precio minimo es de $50"
              },
              max:{
                value:10000,
                message:"el precio maximo es de $10000"
              }
            })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
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
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
             aria-label="Default select example"
             {...register("categoria",{
              required:"debe seleccionar una categoria"
             })}
             >
              <option value="">Selecciona una opcion</option>
              <option value="Bebida caliente">Bebida caliente</option>
              <option value="Bebida fria">Bebida fria</option>
              <option value="Dulce">Dulce</option>
              <option value="Salado">Salado</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default EditarProducto;
