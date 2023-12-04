const { createApp } = Vue;
    createApp({
        data() {
            return {
                usuarios: [],
                url: 'http://127.0.0.1:5000/usuarios',
                error: false,
                cargando: true,
                usuario: '',
                contraseña: '',
                datos:[]
                }
        },
            methods: {
                registrar() {
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
                        this.usuario=usuario.value;
                        this.contraseña=contraseña.value;

                        document.getElementById("registro_usuario").value = ""
                        document.getElementById("validar_registro_usuario").innerHTML = " ";
                        document.getElementById("registro_clave").value = ""
                        document.getElementById("validar_registro_clave").innerHTML = "";
                        alert("Dato enviado")
                    }
                    if (error)
                        return false;
                    else
                     return true;
                },
                
                grabar() {
                const usuario = {
                    usuario: this.usuario,
                    contraseña: this.contraseña
                };
                var options = {
                    body:JSON.stringify(usuario),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow',
                }

                fetch(this.url, options)
                    .then(()=> {
                    alert('Registro grabado');
                    window.location.href = '/contacto.html';
                    })
                    .catch((err) => {
                    console.error(err);
                    alert('Error al Grabar' + err);
                    })
                },
                fetchData(url) {
                    fetch(url)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            this.datos = data;
                        })
                        .catch((error) => alert('Ups...se produjo un error:' + error));
                },
            },
            created() {
                this.fetchData(this.url);
            },
        }).mount('#app');









// /*Validar formulario registro*/

// function registrar() {
//     let usuario = document.getElementById("registro_usuario"); 
//     let clave = document.getElementById("registro_clave");
//     let error = false;
   
//     document.getElementById("validar_registro_usuario").innerHTML = " ";
//     document.getElementById("validar_registro_clave").innerHTML = " ";
//     if (usuario.value == "") {
//         document.getElementById("validar_registro_usuario").innerHTML = "Completar";
//         error = true;
//         usuario.focus();

//     }
//     if (clave.value.length < 8) {
//         document.getElementById("validar_registro_clave").innerHTML = "Completar";
//         error = true;
//         clave.focus();

//     }
//     if (error == false) {
//         document.getElementById("registro_usuario").value = ""
//         document.getElementById("validar_registro_usuario").innerHTML = " ";
//         document.getElementById("registro_clave").value = ""
//         document.getElementById("validar_registro_clave").innerHTML = "";
//         alert("Dato enviado")
//     }
//     if (error)
//         return false;
//     else
//         return true;

// }

// validarFormulario() {
//     if (this.usuario === '' || this.contraseña === '') {
//       alert('Completa ambos campos');
//       return;
//     }
//     this.grabar();
//   },


// const { createApp } = Vue
//   createApp({
//     data() {
//       return {
//         usuarios:[],
//         // url:'http://localhost:5000/usuarios', 
//    // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
//         url:'http://127.0.0.1:5000/usuarios',   // si ya lo subieron a pythonanywhere
//         error:false,
//         cargando:true,
//         datos:[],
//         usuario: "",
//         contraseña:"",
//         es_administrador: false
//     }  
//     },
//     methods: {
//         fetchData(url) {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                    console.log(data)
//                     this.datos=data
//                 })
//                 .catch(error => alert("Ups...se produjo un error:"+ error))
                              
//                 },

//                 grabar(){
//                     let usuario = {
//                         usuario:this.usuario,
//                         contraseña: this.contraseña
//                     }
//                     var options = {
//                         body:JSON.stringify(usuario),
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         redirect: 'follow'
//                     }
        
//                     fetch(this.url, options)
//                     .then(function () {
//                         alert("Registro grabado")
//                         window.location.href = "/contacto.html";
//                     })
//                     .catch(err => {
//                         console.error(err);
//                         alert("Error al Grabar" + err)  // puedo mostrar el error tambien
//                     })      
//             }
//           },
               
//     created() {
//         this.fetchData(this.url)
//     },
//   }).mount('#app')