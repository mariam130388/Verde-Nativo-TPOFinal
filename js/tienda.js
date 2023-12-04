const { createApp } = Vue

createApp({
    data() {
        return {
            // url: "js/datos.json",
            url: "http://127.0.0.1:5000/productos",
            error: false,
            datos: [],
            cart: [], 
        }
    },

    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data.content;
                    this.datos.forEach(elemento => {
                        elemento.cantidad = 0;
                    });
                });
        },

        addItemToCart(elemento, cantidad) {
            this.cart.push({
                nombre: elemento.nombre,
                precio: elemento.precio,
                cantidad: cantidad,
            });
        },

 reducirCantidad(item) {
    if (item.cantidad > 1) {
        item.cantidad--;
    }
},

incrementarCantidad(item) {
    item.cantidad++;
}
},

created() {
this.fetchData(this.url)
}
}).mount("#app")