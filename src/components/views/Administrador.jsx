import { Button, Container,Table } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";

const Administrador = () => {
  return (
    <Container>
      <div className="d-flex justify-content-around">
        <h1>Productos disponibles</h1>
        <Button className="py-1">Agregar</Button>
      </div>
      <hr />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Imagen URL</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
           <ItemProducto/>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Administrador;
