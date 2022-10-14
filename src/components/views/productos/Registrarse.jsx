import { Container } from "react-bootstrap";


const Registrarse = () => {
    return (
        <Container>
            <div className="text-center my-5">
                <h1>Registro</h1>
            </div>
            <div className="w-75 mx-auto mb-5">
                <form>
                    <label>Nombre</label>
                    <input type="text"  className="form-control my-2" />
                    <label>Apellido</label>
                    <input type="email"  className="form-control my-2"/>
                    <label>Email</label>
                    <input type="text" className="form-control my-2" />
                    <label>Contraseña</label>
                    <input type="password" className="form-control my-2" />
                </form>
            </div>
        </Container>
    );
};

export default Registrarse;