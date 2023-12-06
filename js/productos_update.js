console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)

const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        name:"",
        image:"",
        stock:0,
        precio:0,
        description: "",
        url:'https://mariamtomas.pythonanywhere.com/productos/'+id

       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id,
                    this.name = data.name,
                    this.image=data.image,
                    this.stock=data.stock,
                    this.precio=data.precio,
                    this.description=data.description                  

                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let producto = {
                name:this.name,
                precio: this.precio,
                stock: this.stock,
                image: this.image,
                description: this.description
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./productos.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')

