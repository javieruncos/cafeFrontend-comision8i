import { useEffect ,useState } from "react";
import { Button, Container,Table } from "react-bootstrap";
import { consultarApi } from "../../helper/queries";
import ItemProducto from "./productos/ItemProducto";

const Administrador = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    consultarApi().then((respuesta)=>{
      setProductos(respuesta)
    })
   
  },[])




  return (
    <Container className="mainSection">
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
            {
              productos.map((item)=><ItemProducto key={item.id} producto={item}/>)
            }
          
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Administrador;
