
const { createApp } = Vue;

createApp({
  data() {
    return {
      usuarios: [],
      url: 'https://mariamtomas.pythonanywhere.com/usuarios',
      error: false,
      cargando: true,
      datos: [],
      usuario: "",
      contraseña: ""
    };
  },
  methods: {
    validar() {
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
      return !error;
    },
    grabar() {
      if (this.validar()) {
        let usuario = {
          usuario: this.usuario,
          contraseña: this.contraseña
        };
        var options = {
          body: JSON.stringify(usuario),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          redirect: 'follow'
        };

        fetch(this.url, options)
          .then(() => {
            alert("Registro grabado");
            window.location.href = "./contacto.html";
          })
          .catch(err => {
            console.error(err);
            alert("Error al Grabar" + err);
          });
      } else {
        alert("Por favor, completa los campos correctamente.");
      }
    },
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.datos = data;
        })
        .catch(error => alert("Ups...se produjo un error:" + error));
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');

