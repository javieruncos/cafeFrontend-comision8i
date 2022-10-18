import { Container,Form,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../../../helper/usuario";

const Registrarse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
     crearUsuarioAPI(data).then((usuario)=>{
       if(usuario.status === 201){
        Swal.fire("usuario creado","usuario creado correctamente","success")
        reset()
       }else{
        Swal.fire("error","intente esta accion mas tarde","error")
       }
     })
  };

  return (
    <Container>
      <div className="text-center my-5">
        <h1>Registro</h1>
      </div>
      <div className="w-50 mx-auto mb-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Ej Juan " 
            {...register("nombreUsuario",{
                required:"Este campo es obligatorio",
                minLength:{
                    value:3,
                    message:"el numero minimo de caracteres es de 3"
                },
                maxLength:{
                    value:100,
                    message:"el numero maximo de caracteres es de 100"
                }
            })}
            />
            <Form.Text className="text-danger">
             {errors.nombreUsuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter email" 
            {...register("Apellido",{
                required:"Este campo es obligatorio",
                minLength:{
                    value:3,
                    message:"El numero minimo de caracteres es de 3"
                },
                maxLength:{
                    value:100,
                    message:"El numero maximo de caracteres es de 100"
                }
            })}
            />
            <Form.Text className="text-danger">
             {errors.Apellido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email"
             placeholder="Enter email"
             {...register("Email",{
                required:"Este campo es obligatorio",
                pattern:{
                value:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message:"Debe ingresar un email valido"
            }
             })} 
             />
            <Form.Text className="text-danger">
             {errors.Email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Password" 
            {...register("contraseña",{
                required:"Este campo es obligatorio",
                minLength:{
                    value:14,
                    message:"El numero minimo de caracteres es de 14"
                },
                maxLength:{
                    value:50,
                    message:"El numero maximo de caracteres es de 50"
                }
            })}
            />
             <Form.Text className="text-danger">
             {errors.contraseña?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registrarse;
