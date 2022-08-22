
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


function sumaProducto1(){
    let opcion = confirm("Queres agregar "+producto1.nombre+"? El valor es de $"+producto1.precio+" y contiene: "+producto1.contenido+".")
    if(opcion == true){
        total = total + producto1.precio;
        carrito.push(producto1.contenido)
        alert(producto1.nombre+" agregado al carrito!")
    }
}

function sumaProducto2(){
    let opcion = confirm("Queres agregar "+producto2.nombre+"? El valor es de $"+producto2.precio+" y contiene: "+producto2.contenido+".")
    if(opcion == true){
        total = total + producto2.precio;
        carrito.push(producto2.contenido)
        alert("Producto agregado al carrito!")
    }
}

function sumaProducto3(){
    let opcion = confirm("Queres agregar "+producto3.nombre+"? El valor es de $"+producto3.precio+" y contiene: "+producto3.contenido+".")
    if(opcion == true){
        total = total + producto3.precio;
        carrito.push(producto3.contenido)
        alert("Producto agregado al carrito!")
    }
}

function envio(){
    if(total <= 1099){
        total = total + 300
        alert("Se sumaran $300 de envio. La compra minima para el envio gratis es de $1099.")
    } else {
        alert("Contas con envio gratis en esta compra!")
    }
}

sumaProducto1();
sumaProducto2();
sumaProducto3();
envio();

totalCarrito = []

carrito.forEach(function(nombre) {
    totalCarrito.push(nombre);
})

function carritoCompra() {
    alert("Has seleccionado "+carrito.length+" articulos. "+totalCarrito)
}

carritoCompra();

function pagos(){
    medioDePago = prompt("El total es $" + total + " Ingrese como quiere abonar (efectivo, tarjeta de debito, tarjeta de credito o transferencia)")
    switch (medioDePago){
        case "efectivo": 
            return alert("Perfecto! El total es $" + total + ". Seras redirigido a la pagina de pago.");

        case "tarjeta de debito": 
            return alert("Perfecto! El total es $" + total + ". Seras redirigido a la pagina de pago.");
            
        case "debito": 
            return alert("Perfecto! El total es $" + total + ". Seras redirigido a la pagina de pago.");

        case "credito": 
            total = total * 1.15
            return alert("Perfecto! Se aplicara un recargo del 15%. El total es $" + total.toFixed(2) + ". Seras redirigido a la pagina de pago.")

        case "tarjeta de credito": 
            total = total * 1.15
            return  alert("Perfecto! Se aplicara un recargo del 15%. El total es $" + total.toFixed(2) + ". Seras redirigido a la pagina de pago.")

        case "transferencia": 
            return alert("Perfecto! El total es $" + total + ". Seras redirigido a la pagina de pago.")
        
        default:
            alert("El medio de pago ingresado no es valido. Vuelva a intentarlo.")
            pagos();
            break;
    }
}

pagos();

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


let boton = document.getElementsByTagName("button")

for (i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", agregar);
}

function agregar(){
    carrito.push("Item")
    console.log(carrito)
    let parrafo = document.createElement("p")
    parrafo.innerText = "Agregado al carrito!"
    document.body.append(parrafo)
}