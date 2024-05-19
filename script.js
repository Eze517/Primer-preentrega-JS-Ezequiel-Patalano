
let codProd = parseInt(prompt("Bienvenidos a Saphirus Suhe😀🌟💫, las mejores fragancias para tu vida💙💚💛. Ingresa el codigo del producto a comprar en nuestro catalogo\n 1-Aerosoles...$500\n 2-Difusores...$400\n 3-Sahumerios...$300\n 4-Caritas auto...$200\n 5-Salir del sistema🏃‍♂️/Abonar💰"));

let total = 0;
const IVA = 0.21;
const DESC_EF = 0.1;
const RECARGO_CREDITO = 0.04;

while (codProd != 5) {
    switch (codProd) {
        case 1:
            total += 500;
            alert("Agregaste Aerosoles a tu carrito🛒 Total acumulado $" + total);
            break;
        case 2:
            total += 400;
            alert("Agregaste Difusores a tu carrito🛒 Total acumulado $" + total);
            break;
        case 3:
            total += 300;
            alert("Agregaste Sahumerios a tu carrito🛒 Total acumulado $" + total);
            break;
        case 4:
            total += 200;
            alert("Agregaste Caritas auto a tu carrito🛒 Total acumulado $" + total);
            break;
        default:
            alert("Codigo incorrecto😫");
            break;
            case 5:
                alert("Gracias por tu visita 🙋‍♂️🙋‍♀️");
                
    }
    codProd = parseInt(prompt("Ingresa el codigo del producto a comprar en Saphirus Suhe \n 1-Aerosoles...$500 \n 2-Difusores...$400 \n 3-Sahumerios...$300 \n 4-Caritas auto...$200 \n 5-Salir del sistema/Abonar"));
}

let modoPago = parseInt(prompt("🤑Como deseas abonar ? \n 1 - Efectivo \n 2 - Debito \n 3 - Credito \n 4 - Mercado pago \n 5 - Salir del sistema"));

if (modoPago == 1) {
    alert("Total a abonar 🤑 $" + aplicarImpuestosyDescuentos(IVA, DESC_EF));
} else if (modoPago == 2) {
    alert("Total a abonar 🤑 $" + aplicarImpuestosyDescuentos(IVA, 0));
} else if (modoPago == 3) {
    alert("Total a abonar 🤑 $" + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO, 0));
} else if (modoPago == 4) {
    alert("Total a abonar 🤑 $" + aplicarImpuestosyDescuentos(IVA + RECARGO_CREDITO, 0));
} else if (modoPago == 5) {
    alert("Gracias por tu visita 🙋‍♂️🙋‍♀️")
}


function aplicarImpuestosyDescuentos(impuestos, descuentos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosYDescuentos;
    if (descuentos != 0) {
        totalConImpuestosYDescuentos = totalConImpuestos * (1 - descuentos);
    } else {
        totalConImpuestosYDescuentos = totalConImpuestos;
    }
    return totalConImpuestosYDescuentos;
}


