
function verificarUsuario() {
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    if (usuario === 'admin' && clave === '12345678') {
        redireccionar('productos.html'); // Redirige a la URL deseada
    } else {
        alert('Usuario no habilitado como administrador');
    }
}

function redireccionar(url) {
    window.location.href = url; // Redirige la ventana actual a la URL especificada
}
