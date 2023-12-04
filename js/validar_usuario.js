function validar() {
    let usuario = document.getElementById("registro_usuario"); 
    let clave = document.getElementById("registro_clave");
    let error = false;
   
    document.getElementById("validar_registro_usuario").innerHTML = " ";
    document.getElementById("validar_registro_clave").innerHTML = " ";
    if (usuario.value == "") {
        document.getElementById("validar_registro_usuario").innerHTML = "Completar";
        error = true;
        usuario.focus();

    }
    if (clave.value.length < 8) {
        document.getElementById("validar_registro_clave").innerHTML = "Completar";
        error = true;
        clave.focus();

    }
    if (error == false) {
        document.getElementById("registro_usuario").value = ""
        document.getElementById("validar_registro_usuario").innerHTML = " ";
        document.getElementById("registro_clave").value = ""
        document.getElementById("validar_registro_clave").innerHTML = "";
        // alert("Dato enviado")
        return false;
    }
    if (error)
        return false;
    else
        return true;

}