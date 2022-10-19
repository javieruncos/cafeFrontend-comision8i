

const URL = process.env.REACT_APP_API_CAFECITO;
// peticion get para obtener producto
// peticion POST crear producto , en los login tambien se puede usar
// peticion PUT sirve para modificar un producto
// peticion DELETE sirve para borrar un producto




export  const consultarApi = async()=>{
//  peticion get para obtener los productos
   try{
    const respuesta = await fetch(URL)
    const listaProducto =await respuesta.json()
    console.log(listaProducto)
    return listaProducto;
   }catch(error){
     console.log(error)
     return false
   }
}

export  const crearProductoApi = async(producto)=>{
//  peticion POST para obtener los productos
   try{
    const respuesta = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(producto) 
    }); 
    return respuesta;
   }catch(error){
     console.log(error)
     return false
   }
}


export  const borrarProductoApi = async(id)=>{
//  peticion DELETE para borrar los productos
   try{
    const respuesta = await fetch(URL+"/"+id,{
      method:"DELETE",
     
    }); 
    return respuesta;
   }catch(error){
     console.log(error)
     return false
   }

}
export  const obtenerProductoApi = async(id)=>{
//  peticion DELETE para borrar los productos
   try{
    const respuesta = await fetch(URL+"/"+id); 
    const producto = {
      dato:await respuesta.json(),
      status:respuesta.status
    }
    return producto;
   }catch(error){
     console.log(error)
     return false
   }
}
export  const editarProductoApi = async(id,producto)=>{
//  peticion DELETE para borrar los productos
   try{
    const respuesta = await fetch(URL+"/"+id,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(producto)
    }); 
   
    return respuesta;
   }catch(error){
     console.log(error)
     return false
   }
}