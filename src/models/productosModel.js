const db = require("../database/models")

const usuario = {

    findAll : async () =>{
        try{
            let usuario = await db.Usuarios.findAll()
                return await usuario

        }catch(error){
            console.log(error)
        }
    }

} 


console.log(usuario.findAll())


