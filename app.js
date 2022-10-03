//Local Storage

localStorage.setItem("descuentos", ["PROMO", "CODER", "CANDY"])
let total = 0
let totalPrices = []
let totalCarrito = document.getElementById("total")

let carritoContainer = document.getElementById("carrito")
let carrito = []
sumaPrice()

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
            <p>Contiene: ${post.contain}</p>
            `
            lista.append(div)
            
            div.className = "col-3"

            let button = document.createElement("button")
            button.innerText = "Agregar"

            button.addEventListener("click", () => {
                carrito.push(post.name)
                carritoContainer.innerText = carrito
                totalPrices.push(post.price)                
                Toastify({
                    text: "¡Producto añadido!",
                    duration: 3000
                }).showToast()
                sumaPrice()
                })

            div.append(button)

            button.className = "btn btn-primary btn-sm"
        })
    })
    

    function sumaPrice(){
        let botonPagar = document.getElementById("pago")
        total = 0
        totalPrices.forEach((i)=> total += i)
        total == 0 ? (totalCarrito.innerText = "¡El carrito esta vacío!") : (totalCarrito.innerText = "El total es: $" + total) && (botonPagar.className = "btn btn-primary btn-sm m-4")
    }


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

let envioContainer = document.getElementById("costo-envio")

function envio(){
    let costoEnvio = 500
    if(total == 0){
        swal({
            title: "Error", 
            text: "No has agregado nada al carrito!",
            icon: "error",
            button: "Ok"
        })
    } else if (total <= 1999){
        swal({
            title: "Envío", 
            text: "Se sumaran $"+ costoEnvio +" de envio. La compra minima para el envio gratis es de $1999.",
            icon: "info",
            button: "Ok"
        })
        envioContainer.innerText = `El costo de envío es de $${costoEnvio}.`
    } else {
        costoEnvio = 0
        swal({
            title: "Envío gratis!", 
            text: "¡Perfecto! ¡Contás con envío gratis!",
            icon: "success",
            button: "Ok"
        })
        envioContainer.innerText = `¡Envío gratis!`
    }
}

//Funcionalidad Reset

let botonReset = document.getElementById("reset")
botonReset.addEventListener("click", function(){
    carrito = []
    carritoContainer.innerText = carrito
    envioContainer.innerText = ""
    totalPrices = []
    sumaPrice()
})
