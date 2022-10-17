import React from "react";
import { Button } from "react-bootstrap";

const ItemProducto = ({producto}) => {
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>${producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td><Button className="my-1">Editar</Button><Button>Borrar</Button></td>
      </tr>
     
    </>
  );
};

export default ItemProducto;
