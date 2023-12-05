const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'http://127.0.0.1:5000/productos',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        datos:[],
        name:"",
        precio:0,
        stock:0,
        image: "",
        description: ""
       
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                   console.log(data)
                    this.datos=data
                })
                .catch(error => alert("Ups...se produjo un error:"+ error))
                              
                },

                eliminar(id) {
                    const url = this.url+'/' + id;
                    var options = {
                        method: 'DELETE',
                    }
                    fetch(url, options)
                        .then(res => res.text()) // or res.json()
                        .then(res => {
                     alert('Registro Eliminado')
                            location.reload(); // recarga el json luego de eliminado el registro
                        })
                },
        

                grabar(){
                    let producto = {
                        name:this.name,
                        precio: this.precio,
                        stock: this.stock,
                        image:this.image,
                        description: this.description
                    }
                    var options = {
                        body:JSON.stringify(producto),
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow'
                    }
        
                    fetch(this.url, options)
                    .then(function () {
                        alert("Registro grabado")
                        window.location.href = "./productos.html";  // recarga productos.html
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar" + err)  // puedo mostrar el error tambien
                    })      
            }
          },
               
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
