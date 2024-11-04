
function determinarRango() {
    let puntuacion = parseFloat(prompt("Ingrese la puntuación:"));

    let mensaje;
    if (puntuacion >= 90) {
        mensaje = "Excelente";
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        mensaje = "Buen trabajo";
    } else {
        mensaje = "Necesitas mejorar";
    }

    document.getElementById('lista').innerHTML = mensaje;
}