let cad = `


<header>
<a class="logo" href="index.html"><img src="img/logo_transparent-final.png" alt="logo"></a>
<button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
<nav class="nav" id="nav">
    <ul class="nav-list">   
        <li><a class="item" href="index.html">Inicio</a></li>
        <li><a class="item" href="guia.html">Nativas</a></li>
        <li><a class="item" href="tienda.html">Tienda</a></li>
        <li><a class="item" href="cursos.html">Cursos</a></li>
        <li><a class="item" href="nosotros.html">Nosotros</a></li>
        <li><a class="item" href="contacto.html">Contacto</a></li>
        <li><a id="oculto" href="javascript:abrir()"><img class="derecha" src="img/user_8764070.png" alt="Cuenta"/></a></li>
        <li><a id="oculto" href="tienda.html"><img class="derecha" src="img/shopping-cart_8764078.png" alt="Carrito"></a></li>
    </ul>
    <button id="cerrar" class="cerrar-menu"><i class="bi bi-x"></i></button>
</nav>

<div class="personal">
    <a href="javascript:abrir()"><img class="derecha" src="img/user_8764070.png" alt="Cuenta"/></a>
    <a href="tienda.html"><img class="derecha" src="img/shopping-cart_8764078.png" alt="Carrito"/></a>
</div>

</header>
<div class="wapp">
<a href="https://api.whatsapp.com/send?phone=1122334455"><img src="img/social.png" alt="wapp"></a>
</div>
`

document.querySelector("header").innerHTML = cad

cad = `
<footer class="footer">
    <div class="fcont">
        <div class="footer-row">
            <div class="footer-links">
                <h4>Contacto</h4>
                <div class="social-links">
                    <a href="mailto:verdenativo@gmail.com"><i class="fa fa-envelope"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=1122334455"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Seguinos</h4>
                <div class="social-links">
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-links">
                <h4>Nuestros viveros</h4>
                <ul>
                    <li><i class="fa-solid fa-location-dot fa-bounce fa-xs" style="color: #EDE9A3;"></i> Laprida 1633, Florida, Vicente López</li>
                    <li><i class="fa-solid fa-location-dot fa-bounce fa-xs" style="color: #EDE9A3;"></i> Av. del Libertador 2304, CABA</li>
                    <li><i class="fa-solid fa-location-dot fa-bounce fa-xs" style="color: #EDE9A3;"></i> Sucursal Panamericana Km.50 Bs. As.</li>
                </ul>
            </div>
        </div>
        <div class="text">
            <p>Desarrollado por Proyecto Verde Nativo®</p>
        </div>
    </div>
</footer>
     `

document.querySelector("footer").innerHTML = cad


/*Valida el formulario login*/

function validar_login() {
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
        document.getElementById("usuario").innerHTML = "";
        document.getElementById("clave").value = ""
        document.getElementById("clave").innerHTML = "";
        alert("Dato enviado")
    }

    if (error)
        return false;
    else
        return true;
}

/*Llama para que abra el login*/ 
function abrir() {
    document.getElementById("personal").style.display = "block";

}

function cerrar() {
    document.getElementById("personal").style.display = "none";

}


/*Validar formulario contacto*/

function consultar() {
    let email = document.getElementById("email"); 
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje")
    let error = false;
   
    document.getElementById("validar_email").innerHTML = " ";
    document.getElementById("validar_telefono").innerHTML = " ";
    document.getElementById("validar_mensaje").innerHTML =" ";
    if (email.value == "") {
        document.getElementById("validar_email").innerHTML = "Completar";
        error = true;
        email.focus();

    }
    if (telefono.value.length < 8) {
        document.getElementById("validar_telefono").innerHTML = "Completar";
        error = true;
        telefono.focus();

    }
    if (mensaje.value =="") {
        document.getElementById("validar_mensaje").innerHTML = "Completar";
        error = true;
        mensaje.focus();

    }
    if (error == false) {
        document.getElementById("email").value = ""
        document.getElementById("validar_email").innerHTML = " ";
        document.getElementById("telefono").value = ""
        document.getElementById("validar_telefono").innerHTML = "";
        document.getElementById("mensaje").value = ""
        document.getElementById("validar_mensaje").innerHTML = "";
        alert("Dato enviado")
    }
    if (error)
        return false;
    else
        return true;
}

