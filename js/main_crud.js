cad= `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html">VERDE NATIVO</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="usuario.html">Usuario</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="index.html">Administrador</a>
              </div>
          </li>
      </ul>
      
  </div>
</div>
</nav>`






document.querySelector("header").innerHTML=cad



/*Valida el formulario login Usuario*/

function validar() {
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "";
    document.getElementById("validar_clave").innerHTML = "";
    if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Completar";
        error = true;
        usuario.focus();

    }
    if (clave.value.length < 8) {
        document.getElementById("validar_clave").innerHTML = "Completar";
        error = true;
        clave.focus();

    }

    if (error == false) {

        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "";
        alert("Puede ingresar")
    }

    if (error)
        return false;
    else
        return true;
}

/*Valida el formulario login Administrador*/

function ingresar() {
    let usuario = document.getElementById("adm");
    let clave = document.getElementById("clave");
    let error = false;
    document.getElementById("ingresar_adm").innerHTML = "";
    document.getElementById("ingresar_clave").innerHTML = "";
    if (usuario.value == "") {
        document.getElementById("ingresar_adm").innerHTML = "Completar";
        error = true;
        usuario.focus();

    }
    if (clave.value.length < 8) {
        document.getElementById("ingresar_clave").innerHTML = "Completar";
        error = true;
        clave.focus();

    }

    if (error == false) {

        document.getElementById("adm").value = ""
        document.getElementById("ingresar_adm").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("ingresar_clave").innerHTML = "";
        alert("Puede ingresar")
    }

    if (error)
        return false;
    else
        return true;
}

