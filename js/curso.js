const { createApp } = Vue
  createApp({
    data() {
      return {
        cursos:[],
        url:'http://127.0.0.1:5000/cursos',
        error:false,
        cargando:true,
        datos:[],
        titulo:"",
        descripcion:"",
        video:""
       
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
                    let curso = {
                        titulo:this.titulo,
                        descripcion: this.descripcion,
                        video: this.video
                    }
                    var options = {
                        body:JSON.stringify(curso),
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow'
                    }
        
                    fetch(this.url, options)
                    .then(function () {
                        alert("Registro grabado")
                        window.location.href = "./crud_cursos.html";  // recarga cursos.html
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

