let count = 0;

function cc(card) {
    // Verifica si la carta está entre 2 y 6, inclusive.
    if (card >= 2 && card <= 6) {
        // Incrementa el contador si ambas condiciones son verdaderas (card es mayor o igual a 2 y menor o igual a 6)
        count++;
    // Verifica si la carta es '10', 'J', 'Q', 'K' o 'A'
    } else if (card === '10' || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        // Decrementa el contador si al menos una de las condiciones es verdadera (card es '10', 'J', 'Q', 'K' o 'A')
        count--;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

function processCards() {
    // Obtiene el valor del campo de texto con el id 'cardInput'
    const cardInput = document.getElementById('cardInput').value;

    // Divide el valor del campo de texto en un array de cartas, eliminando espacios en blanco alrededor de cada carta
    const cards = cardInput.split(',').map(card => card.trim());
    
    // Inicializa un array vacío para almacenar los resultados
    let results = [];
    
    // Itera sobre cada carta en el array 'cards'
    cards.forEach(card => {
        // Llama a la función 'cc' para procesar cada carta y obtener el resultado
        const result = cc(card);
        // Agrega el resultado formateado al array 'results'
        results.push(`${card}: ${result}`);
    });
    
    // Calcula el resultado final del conteo
    const finalResult = count > 0 ? `${count} Bet` : `${count} Hold`;
    // Agrega el resultado final al array 'results'
    results.push(`Resultado final: ${finalResult}`);
    
    // Combina los resultados en una cadena con saltos de línea y los muestra en el elemento HTML con el id 'result'
    document.getElementById('result').innerText = results.join('\n');
}

//.split() se utiliza para dividir una cadena en un array de subcadenas, basándose en un delimitador especificado.
//.map() crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
//.trim() elimina los espacios en blanco al principio y al final de una cadena.
//.forEach() ejecuta una función proporcionada una vez por cada elemento del array.
// &&: Ambas condiciones deben ser verdaderas.
// ||: Al menos una condicion debe ser verdadera.