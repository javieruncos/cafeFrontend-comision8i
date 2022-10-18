import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoApi, consultarApi } from "../../../helper/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: 'Estas seguro que quieres eliminar este producto?',
      text: "No se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        borrarProductoApi(producto.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "producto eliminado",
              "el producto fue exitosamente borrado",
              "success"
            );
            //  busco todos los productos existentes en ese momento de tiempo
            consultarApi().then((respuesta) => {
              // actualizo el state de productos de Administrador con los daros que hay en la API
              setProductos(respuesta);
            });
          } else {
            Swal.fire(
              "ocurrio un error",
              "intente esta operacion mas tarde",
              "error"
            );
          }
        });


        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  };

  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.nombreProducto}</td>
        <td>${producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td>
          <Button
            className="my-1"
            as={Link}
            to={`/administrador/editarProducto/${producto.id}`}
            variant="warning"
          >
            Editar
          </Button>
          <Button onClick={borrarProducto} variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProducto;
