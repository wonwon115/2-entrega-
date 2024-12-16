
 const cotizaciones = {
    oficial: 1042,   // Dólar oficial
    blue: 1125,      // Dólar blue
    mep: 1100,       // Dólar MEP
    ccl: 1099,        // Dólar CCL
};
function convertirDivisa() {
    const monto = parseFloat(document.getElementById('monto').value);
    const divisa = document.getElementById('destino').value;

    if (isNaN(monto)) {
        alert('Por favor, ingrese un monto válido');
        return;
    }

    const resultado = calcularConversion(monto, divisa);
    mostrarResultado(monto, resultado, divisa);
}

function calcularConversion(monto, divisa) {
    return monto / cotizaciones[divisa];
}

function mostrarResultado(montoOriginal, montoConvertido, divisa) {
    const resultadoElemento = document.getElementById('resultado');
    const nombreDivisa = {
        oficial: 'Dólar Oficial',
        blue: 'Dólar Blue', 
        mep: 'Dólar MEP',
        ccl: 'Dólar CCL'
    }[divisa];

    resultadoElemento.innerHTML = `
        ${montoOriginal.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})} 
        = 
        ${montoConvertido.toLocaleString('es-AR', {style: 'currency', currency: 'USD'})} (${nombreDivisa})
    `;
}
function actualizarCotizaciones(nuevasCotizaciones) {
    Object.keys(nuevasCotizaciones).forEach(key => {
        if (cotizaciones.hasOwnProperty(key)) {
            cotizaciones[key] = nuevasCotizaciones[key];
        }
    });
}