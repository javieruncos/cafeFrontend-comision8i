

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