
function Productos(nombre, precio, contenido) {
    this.nombre = nombre;
    this.precio = precio;
    this.contenido = contenido;
}

localStorage.setItem("carrito", [])
localStorage.setItem("descuentos", ["descuento1", "descuento2", "descuento3"])
let total = 0
let totalCarrito = document.getElementById("total")
let producto1 = new Productos("Bolsa de 800gr de chupetines", 500, "800gr chupetines")
let producto2 = new Productos("Mistery Candy Box", 1190, "300gr chupetines, 500gr gomitas, 300gr caramelos masticables")
let producto3 = new Productos("Bolsa de 600gr de gomitas", 750, "600gr gomitas")
let producto4 = new Productos("Chocolate Cadbury", 590, "1 chocolate relleno frutilla 300gr")
const products = [producto1, producto2, producto3, producto4]
localStorage.setItem("products", products)

let catalogo = document.getElementById("catalogo")
function generarCatalogo(){
    for (let i = 0; i < products.length ; i++){
        catalogo.innerHTML += `<div><h4>${products[i].nombre}</h4><h5>$${products[i].precio}</h5><p>Incluye: ${products[i].contenido}</p><a id="button">Agregar al carrito</a></div>`
    }
}

generarCatalogo()

let carritoContainer = document.getElementById("carrito")
let carrito = localStorage.getItem("carrito").split(",")

let boton = document.getElementById("button")
boton.addEventListener("click", agregar())

function agregar(){
    carrito.push(products.nombre)
    carritoContainer.innerText = carrito
    total = total + products.precio
    totalCarrito.innerText = "El total es: $"+ total 
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 3000,
        gravity: "bottom",
        position: "right"
    }).showToast()
}

let boton2 = document.getElementById("button2")
boton2.addEventListener("click", agregar2)

function agregar2(){
    carrito.push(producto2.nombre)
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 1500,
        gravity: "bottom",
        position: "right"
    }).showToast()
    carritoContainer.innerText = carrito
    total = total + producto2.precio
    totalCarrito.innerText = "El total es: $"+ total 
}

let boton3 = document.getElementById("button3")
boton3.addEventListener("click", agregar3)

function agregar3(){
    carrito.push(producto3.nombre)
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 1500,
        gravity: "bottom",
        position: "right"
    }).showToast()
    carritoContainer.innerText = carrito
    total = total + producto3.precio
    totalCarrito.innerText = "El total es: $"+ total 
}

let codigo = document.getElementById("codigo")
codigo.addEventListener("submit", codigoPromo)

function codigoPromo(e){
    e.preventDefault()
    let promo = e.target
    let descuentos = localStorage.getItem("descuentos")
    descuentos.includes(promo.children[0].value) == true ?  (total = total * 0.9) && alert("Codigo Valido! Tenes un 10% de descuento"): alert("Codigo Invalido")
    totalCarrito.innerText = "El total es: $" + total
}

let botonPago = document.getElementById("pago")
botonPago.addEventListener("click", envio)

function envio(){
    total == 0 ? swal({
        title: "Error", 
        text: "No has agregado nada al carrito!",
        icon: "error",
        confirmButtonText: "Ok"
    }) : (total <= 1999 ? (total = total + 300) && (swal({
        title: "Envío", 
        text: "Se sumaran $300 de envio. La compra minima para el envio gratis es de $1999.",
        icon: "info",
        confirmButtonText: "Ok"
    })) : swal({
        title: "Envío gratis!", 
        text: "Perfecto! Contás con envío gratis!",
        icon: "success",
        confirmButtonText: "Ok"
    }))
    textoEnvio = document.getElementById("costo-envio")
    totalCarrito.innerText = "El total es: $"+ total
}
