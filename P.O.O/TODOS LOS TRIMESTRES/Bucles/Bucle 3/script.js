
function numerosPares(){
    let contador = 2;
    let array = [];

    while (contador <= 20){
        array.push(contador);
        contador += 2;
    }
    document.getElementById('lista').innerHTML = `Primeros 10 números pares: <h2>${array}</h2>`
}