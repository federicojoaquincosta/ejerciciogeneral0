let cantidadOreos = 0;
let precioTotalOreos = 0;
const PRECIO_OREO = 100;
let cantidadDonSatur = 0;
let precioTotalDonSatur = 0;
const PRECIO_DON_SATUR = 90;
let cantidadFrutigran = 0;
let precioTotalFrutigran = 0;
const PRECIO_FRUTIGRAN = 200;
let precioFinal = 0;
let formaPago = 0;
let productosTotales = 0;

function agregarOreos() {
    cantidadOreos = Number(document.querySelector("#num_prod_1").value)
    precioTotalOreos = Number(document.querySelector("#num_prod_1").value) * PRECIO_OREO;
    productosTotales += cantidadOreos;
    document.querySelector("#oreo_agregadas").innerHTML = `
    <input type="checkbox" checked name="" id=""> ${cantidadOreos} Oreo agregadas al carrito
    `
}

function agregarDonSatur() {
    cantidadDonSatur = Number(document.querySelector("#num_prod_2").value)
    precioTotalDonSatur = Number(document.querySelector("#num_prod_2").value) * PRECIO_DON_SATUR;
    productosTotales += cantidadDonSatur;
    document.querySelector("#donsatur_agregadas").innerHTML = `
    <input type="checkbox" checked name="" id=""> ${cantidadDonSatur} Don Satur agregadas al carrito
    `
}

function agregarFrutigran() {
    cantidadFrutigran = Number(document.querySelector("#num_prod_3").value)
    precioTotalFrutigran = Number(document.querySelector("#num_prod_3").value) * PRECIO_FRUTIGRAN;
    productosTotales += cantidadFrutigran;
    document.querySelector("#frutigran_agregadas").innerHTML = `
    <input type="checkbox" checked name="" id=""> ${cantidadFrutigran} Frutigran agregadas al carrito
    `
}


function comprar() {
    precioFinal = precioTotalDonSatur + precioTotalOreos + precioTotalFrutigran;
    formaPago = document.querySelector("#opcion_pago").value;

    if (productosTotales < 7 && formaPago == 6) {
        document.querySelector("#info_compra").innerHTML = `
        <h3>Deberá comprar 7 productos o más para pagar en 6 cuotas</h3>
        `
    } else  if (productosTotales < 3 && formaPago >= 3) {
        document.querySelector("#info_compra").innerHTML = `
        <h3>Deberá comprar 3 productos o más para pagar en 3 cuotas</h3>
        `
    }

    if (formaPago == 0) {
        precioFinal = precioFinal - (precioFinal * 0.2);
        
    }
    if (productosTotales > 0 ) {
    document.querySelector("#info_compra").innerHTML = `
    <h3>Cantidad de Oreos compradas: ${cantidadOreos}</h3>
    <br>
    <h3>Precio total Oreos: ${precioTotalOreos}</h3>
    <br>
    <h3>Cantidad De Don Satur compradas: ${cantidadDonSatur}</h3>
    <br>
    <h3>Precio total Don Satur: ${precioTotalDonSatur}</h3>
    <br>
    <h3>Cantidad de Frutigran compradas: ${cantidadFrutigran}</h3>
    <br>
    <h3>Precio total Frutigran: ${precioTotalFrutigran}</h3>
    <br>
    <h3>Cantidad de productos totales: ${productosTotales}</h3>
    <br>
    <h3>Precio Final: ${precioFinal}</h3>
    <br>
    <h3>(se aplica un 20% de descuento si paga en efectivo)</h3>
    <br>
    <h3>Número de cuotas: ${formaPago}</h3>
    <br>
    <h3></h3>
    <br>
    <h3></h3>
    <br>
    <h3></h3>
    <br>
    <h3></h3>
    <br>

    `
}

}



    