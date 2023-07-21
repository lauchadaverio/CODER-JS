let nombre = prompt("Hola! Por favor, ingresá tu nombre")
let apellido = prompt("Ahora, ingresá tu apellido")
function nombreCompleto(nombre, apellido) {
    alert("Tu nombre completo es: " + nombre + " " + apellido);
}
nombreCompleto(nombre, apellido)

let edad = prompt("Cuantos años tenes? (no vale mentir)")
while (edad < 18) {
    switch (edad) {
        default:
            alert("No podras comprar bebidas alcoholicas mientras seas menor de edad.")
            break;
    }
    edad = prompt("Cuantos años tenes?");
}

let productos = [
    {
        id: 1,
        nombreProducto: "Red Label",
        precio: 7850,
    },
    {
        id: 2,
        nombreProducto: "Black Label",
        precio: 12780,
    },
    {
        id: 3,
        nombreProducto: "Double Black",
        precio: 14835,
    },
    {
        id: 4,
        nombreProducto: "Green Label",
        precio: 55556,
    },
    {
        id: 5,
        nombreProducto: "Gold Label",
        precio: 26910,
    },
    {
        id: 6,
        nombreProducto: "Blue Label",
        precio: 105665,
    },

];

let carrito = [];

function buscarProducto() {
    let seleccion = prompt("Qué whisky de Johnnie Walker deseas comprar?: Red Label, Black Label, Double Black, Green Label, Gold Label, Blue Label)");

    producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());
}

function agregarCarrito() {
    if (producto) {
        let cantidad = parseInt(prompt("Cuantas botellas queres comprar?"));
        carrito.push({
            producto: producto.nombreProducto,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad
        });
    } else {
        alert("No contamos con la bebida que ingresaste, solo trabajamos las etiquetas de Johnnie Walker");
    }
}

function confirmarCarrito() {
    while (true) {
        buscarProducto();
        agregarCarrito();

        if (!confirm("¿Desea agregar otro whisky al carrito?")) {
            break;
        }
    }
}

function calcularTotal() {
    console.log("Carrito de compras:");
    carrito.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
    });

    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total a pagar: ${total}`);
}

function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
}

confirmarCarrito();

if (carrito.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
        vaciarCarrito();
    }
}

calcularTotal();