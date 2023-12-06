console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // curso_update.html?id=1
console.log(id)

const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        titulo:"",
        descripcion:"",
        video:0,
        url:'https://mariamtomas.pythonanywhere.com/cursos/'+id

       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id,
                    this.titulo = data.titulo,
                    this.descripcion=data.descripcion,
                    this.video=data.video             

                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let curso = {
                titulo:this.titulo,
                descripcion: this.descripcion,
                video: this.video
            }
            var options = {
                body: JSON.stringify(curso),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "crud_cursos.html"; // navega a crud_cursos.html          
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