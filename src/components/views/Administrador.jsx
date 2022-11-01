import { useEffect ,useState } from "react";
import { Button, Container,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarApi } from "../../helper/queries";
import ItemProducto from "./productos/ItemProducto";

const Administrador = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    consultarApi().then((respuesta)=>{
      setProductos(respuesta.productos)
    })
   
  },[])




  return (
    <Container className="mainSection">
      <div className="my-5 d-flex justify-content-around">
        <h1>Productos disponibles</h1>
        <Button  
        as={Link} 
        to="/crearProducto" 
        className="mt-2" 
        style={{"height":40}}
        >Agregar</Button>
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
              productos.map((item)=><ItemProducto key={item._id} producto={item} setProductos={setProductos}/>)
            }
          
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Administrador;
