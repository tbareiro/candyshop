//Local Storage

localStorage.setItem("carrito", [])
localStorage.setItem("descuentos", ["PROMO", "CODER", "CANDY"])
let total = 0
let totalCarrito = document.getElementById("total")

let carritoContainer = document.getElementById("carrito")
let carrito = localStorage.getItem("carrito")

//Catalogo

const lista = document.getElementById("lista")

fetch('/data.json')
	.then((res) => res.json())
	.then((data) => {
        data.products.forEach(post => {
            const div = document.createElement('div')
            div.innerHTML += `
            <h3>${post.name}<h3>
            <h5>$${post.price}</h5>
            <p>${post.contain}</p>
            `
            lista.append(div)
            
            div.className = "col-4"

            let button = document.createElement("button")
            button.innerText = "Agregar"

            button.addEventListener("click", function(){
                carrito.push(post.name)
                carritoContainer.innerText = carrito
                localStorage.setItem("carrito", carrito)
                Toastify({

                    text: "¡Producto añadido!",
                    
                    duration: 3000
                    
                    }).showToast();
            })
            div.append(button)

            button.className = "btn btn-primary btn-sm"
        })
    })


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
    })  && (codigo.innerText = "¡Descuento aplicado!") : swal({
        title: "Error", 
        text: "El código de descuento no es válido.",
        icon: "error",
    })
    totalCarrito.innerText = "El total es: $" + total
}

//Funcionalidad costo envio

let botonPago = document.getElementById("envio")
botonPago.addEventListener("click", envio)

function envio(){
    total == 0 ? swal({
        title: "Error", 
        text: "No has agregado nada al carrito!",
        icon: "error",
        button: "Ok"
    }) : (total <= 1999 ? (total = total + 300) && (swal({
        title: "Envío", 
        text: "Se sumaran $300 de envio. La compra minima para el envio gratis es de $1999.",
        icon: "info",
        button: "Ok"
    })) : swal({
        title: "Envío gratis!", 
        text: "Perfecto! Contás con envío gratis!",
        icon: "success",
        button: "Ok"
    }))
    textoEnvio = document.getElementById("costo-envio")
    totalCarrito.innerText = "El total es: $"+ total
}

//Funcionalidad Reset

let botonReset = document.getElementById("reset")
botonReset.addEventListener("click", function(){
    carrito = []
    carritoContainer.innerText = carrito
})
