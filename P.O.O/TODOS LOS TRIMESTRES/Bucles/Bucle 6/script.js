
function promedio() {
    let notas = [];
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        notas.push(nota);
        suma += nota;
    }

    let promedio = suma / 5;

    document.getElementById('lista').innerHTML = `Las notas son: <h2>${notas.join(', ')}</h2> y el promedio es: <h2>${promedio}</h2>`;
}