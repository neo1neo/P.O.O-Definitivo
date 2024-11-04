
function nume() {
    let resul = "";
    let numero = parseFloat(prompt("Ingrese un número:"));

    if (numero > 0) {
        resul = `El número <h2>${numero}</h2> es positivo`;
    } else if (numero < 0) {
        resul = `El número <h2>${numero}</h2> es negativo`;
    } else {
        resul = `El número <h2>${numero}</h2> es igual a cero`;
    }
    document.getElementById('lista').innerHTML = resul;
}