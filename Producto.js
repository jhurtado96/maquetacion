

class Producto {

    constructor(nombre, precio) {
        nombre = this.nombre
        precio = this.precio
    }
    
    toString() {
        console.log(this.nombre)
        console.log(this.precio)
    }


}

let skate = new Producto("Skate Manchego", 99)
let camiseta = new Producto("Camiseta Blanca", 19)
let pistola = new Producto("pistola", 199)
let ordenador = new Producto("Ordenador Gaming", 1999)
let arrayCarrito = [skate]
skate.toString

function meterEnCarritoSkate() {
    arrayCarrito.push(skate)
    console.log(arrayCarrito)
}

function meterEnCarritoPistola() {
    arrayCarrito.push(pistola)
}

function meterEnCarritoOrdenador() {
    arrayCarrito.push(ordenador)
}

function meterEnCarritoCamiseta() {
    arrayCarrito.push(camiseta)
}

function mostrarCarritoPrecio() {
  let precioTotal = 0
    for(let i = 0;arrayCarrito.length;i++){
     precioTotal=   arrayCarrito[i].precio + precioTotal
    }
    alert(arrayCarrito + " El precio total de los productos es: " + precioTotal)
}