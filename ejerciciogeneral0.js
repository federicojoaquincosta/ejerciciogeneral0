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

function printOreo() {
    if (cantidadOreos > 0) {
        document.querySelector("#mostrar_oreo").innerHTML = `
        <h3>Cantidad de Oreos compradas: ${cantidadOreos}</h3>
        <br>
        <h3>Precio total Oreos: ${precioTotalOreos}</h3>
        `;
    }
}

function printDonsatur() {
    if (cantidadDonSatur > 0) {
        document.querySelector("#mostrar_donsatur").innerHTML = `
        <h3>Cantidad de Don Satur compradas: ${cantidadDonSatur}</h3>
        <br>
        <h3>Precio total Don Satur: ${precioTotalDonSatur}</h3>
        `;
    }
}

function printFrutigran() {
    if (cantidadFrutigran > 0) {
        document.querySelector("#mostrar_frutigran").innerHTML = `
        <h3>Cantidad de Frutigran compradas: ${cantidadFrutigran}</h3>
        <br>
        <h3>Precio total Frutigran: ${precioTotalFrutigran}</h3>
        `;
    }
}

function agregarOreos() {
    productosTotales = cantidadDonSatur + cantidadFrutigran;
    cantidadOreos = Number(document.querySelector("#num_prod_1").value)
    precioTotalOreos = Number(document.querySelector("#num_prod_1").value) * PRECIO_OREO;
    productosTotales += cantidadOreos;
    document.querySelector("#oreo_agregadas").innerHTML = `
    <input type="checkbox" checked name="" id=""> ${cantidadOreos} Oreo agregadas al carrito
    `
}

function agregarDonSatur() {
    productosTotales = cantidadOreos + cantidadFrutigran;
    cantidadDonSatur = Number(document.querySelector("#num_prod_2").value)
    precioTotalDonSatur = Number(document.querySelector("#num_prod_2").value) * PRECIO_DON_SATUR;
    productosTotales += cantidadDonSatur;
    document.querySelector("#donsatur_agregadas").innerHTML = `
    <input type="checkbox" checked name="" id=""> ${cantidadDonSatur} Don Satur agregadas al carrito
    `
}

function agregarFrutigran() {
    productosTotales = cantidadDonSatur + cantidadOreos;
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

    if (formaPago == 0 && productosTotales > 0) {
        precioFinal = precioFinal - (precioFinal * 0.2);
        printOreo();
        printDonsatur();
        printFrutigran();
        document.querySelector("#info_compra").innerHTML = `
    <br>
    <h3>Cantidad de productos totales: ${productosTotales}</h3>
    <br>
    <h3>Precio Final: ${precioFinal}</h3>
    <br>
    <h3>Felicidades! al pagar en efectivo tiene un 20% de descuento</h3>
    <br>
    <h3></h3>
    `
    } else if (formaPago == 1 && productosTotales > 0) {
        printOreo();
        printDonsatur();
        printFrutigran();
        document.querySelector("#info_compra").innerHTML = `
        <br>
        <h3>Cantidad de productos totales: ${productosTotales}</h3>
        <br>
        <h3>Precio Final: ${precioFinal}</h3>
        <br>
        <h3>Número de cuotas: ${formaPago}</h3>
        <br>
        <h3></h3>
        `
    } else if (formaPago == 3 && productosTotales < 3) {
        document.querySelector("#info_compra").innerHTML = `
        <h3>Deberá comprar 3 productos o más para pagar en 3 cuotas</h3>
        `
    } else if (formaPago == 3 && productosTotales >= 3) {
        precioFinal = precioFinal + (precioFinal * 0.05)
        printOreo();
        printDonsatur();
        printFrutigran();
        document.querySelector("#info_compra").innerHTML = `
        <br>
        <h3>Cantidad de productos totales: ${productosTotales}</h3>
        <br>
        <h3>Precio Final: ${precioFinal}</h3>
        <br>
        <h3>Número de cuotas: ${formaPago}</h3>
        <br>
        <h3>5% de aumento</h3>
        `
    } else if (formaPago == 6 && productosTotales < 8) {
        document.querySelector("#info_compra").innerHTML = `
        <h3>Deberá comprar 8 productos o más para pagar en 6 cuotas</h3>
        `
    } else if (formaPago == 6 && productosTotales >= 8) {
        precioFinal = precioFinal + (precioFinal * 0.15)
        printOreo();
        printDonsatur();
        printFrutigran();
        document.querySelector("#info_compra").innerHTML = `
        <br>
        <h3>Cantidad de productos totales: ${productosTotales}</h3>
        <br>
        <h3>Precio Final: ${precioFinal}</h3>
        <br>
        <h3>Número de cuotas: ${formaPago}</h3>
        <br>
        <h3>15% de aumento</h3>
        `
    }
};

