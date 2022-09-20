//Catalogo

const lista = document.getElementById("lista")

fetch('/data.json')
	.then((res) => res.json())
	.then((data) => {
        data.products.forEach(post => {
            const li = document.createElement('li')
            li.innerHTML += `
            <h2>${post.name}<h2>
            <h3>$${post.price}</h3>
            <p>${post.contain}</p>
            <button class="botones">Agregar al carrito</button>
            `
            lista.append(li)
        })
    })

const botones = document.querySelectorAll("botones")
const agregar = function () {
    console.log("Recibido")
}

botones.forEach(boton => {
    boton.addEventListener("click", agregar)
})

//Local Storage

localStorage.setItem("carrito", [])
localStorage.setItem("descuentos", ["descuento1", "descuento2", "descuento3"])
let total = 0
let totalCarrito = document.getElementById("total")

let carritoContainer = document.getElementById("carrito")
let carrito = localStorage.getItem("carrito").split(",")


//Funcionalidad codigo promo

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

//Funcionalidad costo envio

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
