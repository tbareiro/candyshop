
function Productos(product) {
    this.nombre = product.nombre;
    this.precio = product.precio;
    this.contenido = product.contenido;
}

let producto1 = new Productos({nombre: "Bolsa de 800gr de chupetines", precio: 500, contenido: "800gr chupetines"})
let producto2 = new Productos({nombre: "Mistery Candy Box", precio: 1190, contenido: "300gr chupetines, 500gr gomitas, 300gr caramelos masticables"})
let producto3 = new Productos({nombre: "Bolsa de 600gr de gomitas", precio: 750, contenido: "600gr gomitas"})

localStorage.setItem("carrito", [])
localStorage.setItem("descuentos", ["descuento1", "descuento2", "descuento3"])
let total = 0
let totalCarrito = document.getElementById("total")

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
let carrito = localStorage.getItem("carrito").split(",")

let boton1 = document.getElementById("button1")
boton1.addEventListener("click", agregar1)

function agregar1(){
    carrito.push(producto1.nombre)
    carritoContainer.innerText = carrito
    total = total + producto1.precio
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
    descuentos.includes(promo.children[0].value) == true ?  (total = total * 0.9) && swal({
        title: "Descuento Válido", 
        text: "El código de descuento es válido! Tenés un 10% de descuento.",
        icon: "success",
    }) : swal({
        title: "Error", 
        text: "El código de descuento no es válido.",
        icon: "error",
    })
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
