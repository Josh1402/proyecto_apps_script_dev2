function guardarUsuario(usuario) {

    try {
        const {id, nombreCompleto, correo, contraseña } = usuario;
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        sheetUsuarios.appendRow([id, nombreCompleto, correo, contraseña])
        return {
            titulo: "Registro Correcto"
        }    
    } catch (error) {
        return {
            titulo: "Salio mal algo una disculpa" + error,  
        }
    }
    
}