import React from "react";
import { Button, Container ,Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="mainSection">
      <h1 className="text-center my-5">Iniciar Sesion</h1>
      <div className="w-50 mx-auto my-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control 
            type="text"
             placeholder="Enter email" 
              {...register("usuario",{
                required:"El nombre de usuario es obligatorio",
                minLength:{
                    value:3,
                    message:"El numero minimo de caracteres es de 3"
                },
                maxLength:{
                    value:100,
                    message:"el numero maximo de caracteres es 100"
                }
              })}
             />
            <Form.Text className="text-danger">
             {errors.usuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            {...register("password",{
                required:"Este campo es obligatorio",
            })}
            />
             <Form.Text className="text-danger">
             {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
           
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
