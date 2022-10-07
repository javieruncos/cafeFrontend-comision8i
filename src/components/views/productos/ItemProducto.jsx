import React from "react";
import { Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Dulce</td>
        <td><Button className="me-2">Editar</Button><Button>Borrar</Button></td>
      </tr>
     
    </>
  );
};

export default ItemProducto;
