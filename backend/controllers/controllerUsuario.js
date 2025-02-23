function guardarUsuario(usuario) {

    try {
        const {id, nombreCompleto, correo, contraseña } = usuario;
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        sheetUsuarios.appendRow([])
        return {
            titulo: "Registro Correcto"
        }    
    } catch (error) {
        return {
            titulo: "Una disculpa, pero ha sucedido un error en la solicitud" + error,  
        }
    }
    
}