import { Container,Button ,Form} from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container className="my-4">
        <h1>Editar Producto</h1>
        <hr />
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre producto</Form.Label>
              <Form.Control type="text" placeholder="Ej cafe" />
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
              Guardar
            </Button>
          </Form>
        </div>
      </Container>
        
    );
};

export default EditarProducto;