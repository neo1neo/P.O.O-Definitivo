function contarWhile(){
    let contador = 20;
    let array = [];

    while (contador > 9){
        array.push(contador);
        contador--;
    }
    document.getElementById('lista').innerHTML = `Numeros del 20 al 10 con While: ${array}`
}

function contarWhile(){
    let array = [];
    for (let i = 20; i >= 10; i--){
        array.push(i);
    }
    document.getElementById('lista').innerHTML = `Numeros del 20 al 10 con For: ${array}`
}