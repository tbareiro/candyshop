
function Productos(product) {
    this.nombre = product.nombre;
    this.precio = product.precio;
    this.contenido = product.contenido;
}

let producto1 = new Productos({nombre: "Bolsa de 800gr de chupetines", precio: 500, contenido: "800gr chupetines"})
let producto2 = new Productos({nombre: "Mistery Candy Box", precio: 1190, contenido: "300gr chupetines, 500gr gomitas, 300gr caramelos masticables"})
let producto3 = new Productos({nombre: "Bolsa de 600gr de gomitas", precio: 750, contenido: "600gr gomitas"})

let carrito = []
let total = 0
let totalCarrito = document.getElementById("total")
const descuentos = ["descuento1", "descuento2", "descuento3"]

let titulo1 = document.getElementById("producto1-titulo")
titulo1.innerText = producto1.nombre

let titulo2 = document.getElementById("producto2-titulo")
titulo2.innerText = producto2.nombre

let titulo3 = document.getElementById("producto3-titulo")
titulo3.innerText = producto3.nombre

let precio1 = document.getElementById("producto1-precio")
precio1.innerText = producto1.precio

let precio2 = document.getElementById("producto2-precio")
precio2.innerText = producto2.precio

let precio3 = document.getElementById("producto3-precio")
precio3.innerText = producto3.precio

let carritoContainer = document.getElementById("carrito")

let boton1 = document.getElementById("button1")
boton1.addEventListener("click", agregar1)

function agregar1(){
    carrito.push(producto1.nombre)
    carritoContainer.innerText = carrito
    total = total + producto1.precio
    totalCarrito.innerText = "El total es: $"+ total 
}

let boton2 = document.getElementById("button2")
boton2.addEventListener("click", agregar2)

function agregar2(){
    carrito.push(producto2.nombre)
    carritoContainer.innerText = carrito
    total = total + producto2.precio
    totalCarrito.innerText = "El total es: $"+ total 
}

let boton3 = document.getElementById("button3")
boton3.addEventListener("click", agregar3)

function agregar3(){
    carrito.push(producto3.nombre)
    carritoContainer.innerText = carrito
    total = total + producto3.precio
    totalCarrito.innerText = "El total es: $"+ total 
}


let codigo = document.getElementById("codigo")
codigo.addEventListener("click", codigoPromo)

function codigoPromo(codigo){
    if (descuentos.includes(codigo) === true){
        alert("Codigo Válido")
        total = total * 0.9
}}

let botonPago = document.getElementById("pago")
botonPago.addEventListener("click", envio)

let costoEnvio = 300

function envio(){
    if(total === 0){
        alert ("Aun no has sumado nada al carrito!")
    } else if(total <= 1999){
        total2 = total + costoEnvio
        alert("Se sumaran $300 de envio. La compra minima para el envio gratis es de $1999.")
        totalCarrito.innerText = "El total es: $"+ total2
    } else {
        costoEnvio = 0
        total = total + costoEnvio
        textoEnvio = document.getElementById("costo-envio")
        textoEnvio.innerText = "Contas con envio gratis en esta compra!"
    }
}

let codigoIngresado = document.getElementById("codigo")
if (descuentos.includes(codigoIngresado.addEventListener)){
    total = total * 0
}
