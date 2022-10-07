const URL = process.env.REACT_APP_API_CAFECITO;



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