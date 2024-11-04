
function numerosPares() {
    let N = parseInt(prompt("Ingrese la cantidad de números pares que desea encontrar:"));
    let numerosPares = [];

    for (let i = 1; numerosPares.length < N; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }

    document.getElementById('lista').innerHTML = `Los ${N} primeros números pares son: \n<h2>${numerosPares}</h2>`;
}