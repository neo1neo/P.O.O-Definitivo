function numeroMayor() {
    let numeros = []; 

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(numero);
    }

    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        //forma alternativa de if y else
        // mayor = (mayor < numeros) ? numeros : mayor; 
    document.getElementById('lista').innerHTML = `Los numeros ingresados son: <h2>${numeros}</h2> \n El numero mayor es: <h2>${mayor}</h2>`;
    }
}