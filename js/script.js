let nombre = prompt("Hola! Por favor, ingresá tu nombre")
let apellido = prompt("Ahora, ingresá tu apellido")
function nombreCompleto(nombre, apellido) {
    alert("Tu nombre completo es: " + nombre + " " + apellido);
}
nombreCompleto(nombre, apellido)

let edad = prompt("Cuantos años tenes? (no vale mentir)")
while (edad <18) {
    switch (edad) {
        default:
            alert("No podras comprar bebidas alcoholicas mientras seas menor de edad.")
            break;
    }
    edad = prompt("Cuantos años tenes?");
}

let carrito = "";
let nuevoOperacion = false;

let producto = prompt("Ingrese que bebida desea comprar (Fernet, Vodka, Whisky, Champagne, Cerveza):");
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));

function hacerCarrito(producto, cantidad) {
    do {
        seleccionarProducto(producto, cantidad);
        nuevoOperacion = confirm("¿Desea agregar otra bebida al carrito?");
        if (nuevoOperacion) {
            producto = prompt("Ingrese el nombre del producto que desea comprar (Fernet, Vodka, Whisky, Champagne, Cerveza):");
            cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
        }
    } while (nuevoOperacion);

    console.log("Bebidas en el carrito:");
    console.log(carrito);
}

function seleccionarProducto(producto, cantidad) {
    switch (producto.toLowerCase()) {
        case "fernet":
            carrito += `Fernet - Cantidad: ${cantidad} - Precio: ${2650 * cantidad} pesos\n`;
            break;
        case "vodka":
            carrito += `Vodka - Cantidad: ${cantidad} - Precio Total: ${1670 * cantidad} pesos\n`;
            break;
        case "whisky":
            carrito += `Whisky - Cantidad: ${cantidad} - Precio Total: ${6890 * cantidad} pesos\n`;
            break;
        case "champagne":
            carrito += `Champagne - Cantidad: ${cantidad} - Precio Total: ${2870 * cantidad} pesos\n`;
            break;
        case "cerveza":
            carrito += `Cerveza - Cantidad: ${cantidad} - Precio Total: ${442 * cantidad} pesos\n`;
            break;
        default:
            alert("No tenemos la bebida que ingresaste.");
            break;
    }
}

hacerCarrito(producto, cantidad);