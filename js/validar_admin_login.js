
// function verificarUsuario() {
//     let usuario = document.getElementById('usuario').value;
//     let clave = document.getElementById('clave').value;
//     if (usuario === 'admin' && clave === '12345678') {
//         redireccionar('productos.html'); // Redirige a la URL deseada
//     } else {
//         alert('Usuario no habilitado como administrador');
//     }
// }

// function redireccionar(url) {
//     window.location.href = url; // Redirige la ventana actual a la URL especificada
// }


async function verificarUsuario() {
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    
    if (usuario === 'admin' && clave === '12345678') {
        await fetchData('https://mariamtomas.pythonanywhere.com/cursos');
        redireccionar('productos.html');
    } else {
        alert('Usuario no habilitado como administrador');
    }
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Puedes procesar los datos de la API aquí si es necesario
    } catch (error) {
        console.error("Error al realizar la llamada a la API:", error);
        alert("Ups...se produjo un error: " + error);
    }
}

function redireccionar(url) {
    window.location.href = url;
}
