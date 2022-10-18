const URLusuario = process.env.REACT_APP_API_USUARIO



export const consultarApiUsuario = async()=>{
    try{
        const respuesta = await fetch(URLusuario);
        const listaUsuario = await respuesta.json();
        console.log(listaUsuario);
        return listaUsuario;

    }catch(error){
        console.log(error)
        return false
    }
}



export const crearUsuarioAPI = async(usuario)=>{
   try{
       const respuesta = await fetch(URLusuario,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(usuario)
       })
       return respuesta

   }catch(error){
    console.log(error)
   }
}