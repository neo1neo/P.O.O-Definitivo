// 1. Leer los datos de una persona y mostrarlos a través de una impresión
function leerDatosPersona() {
    const nombre = prompt("Ingresa tu nombre:");
    const apellidos = prompt("Ingresa tus apellidos:");
    const edad = parseInt(prompt("Ingresa tu edad:"));
    console.log(`Nombre: ${nombre} ${apellidos}, Edad: ${edad}`);
}

// 2. Leer un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2
function dividirYCalcular() {
    const numero = parseFloat(prompt("Ingresa un número:"));
    const resultado = ((numero / 3) + 10) * 2;
    console.log(`El resultado es: ${resultado}`);
}

// 3. Leer 2 números y deducir si están en orden creciente o decreciente
function verificarOrden() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (num1 < num2) {
        console.log("Los números están en orden creciente.");
    } else if (num1 > num2) {
        console.log("Los números están en orden decreciente.");
    } else {
        console.log("Los números son iguales.");
    }
}

// 4. Leer 5 números, calcular su promedio e imprimir el resultado
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += numero;
    }
    const promedio = suma / 5;
    console.log(`El promedio de los números ingresados es: ${promedio}`);
}

// 5. Calcular la suma de los N primeros números naturales
function sumaNumerosNaturales() {
    const n = parseInt(prompt("Ingresa el valor de N:"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log(`La suma de los ${n} primeros números naturales es: ${suma}`);
}

// 6. Escribir los 100 primeros números pares
function primerosNumerosPares() {
    console.log("Los 100 primeros números pares son:");
    for (let i = 2; i <= 200; i += 2) {
        console.log(i);
    }
}

// 7. Escribir los 100 primeros números impares
function primerosNumerosImpares() {
    console.log("Los 100 primeros números impares son:");
    for (let i = 1; i < 200; i += 2) {
        console.log(i);
    }
}

// 8. Sumar 100 números leídos por teclado
function sumar100Numeros() {
    let suma = 0;
    for (let i = 0; i < 100; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += numero;
    }
    console.log(`La suma de los 100 números es: ${suma}`);
}

// 9. Sumar N números leídos por teclado
function sumarNNumeros() {
    const n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        suma += numero;
    }
    console.log(`La suma de los ${n} números es: ${suma}`);
}

/* 10. Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos,
restarlos, multiplicarlos y dividirlos según elija quien ingresa.*/

let n1 = parseInt(prompt("Ingresar primer numero: "));
let n2 = parseInt(prompt("Ingresar segundo numero: "));
let input = prompt("Ingrese Sumar, Restar, Multiplicar o Dividir");

function operar(a, b, operar) {
    if(operar == "Sumar"){
        return a + b;
    } else if(operar == "Restar"){
        return a - b;
    } else if(operar == "Multiplicar"){
        return a * b;
    } else if(operar == "Dividir"){
        return a / b; 
    }else {
        alert("Ingrese un valor correcto: Sumar, Restar, Multiplicar o Dividir")
    }
    console.log(`La operacion de ${input} entre ${n1} y ${n2} es: `)
};
console.log(`Resultado : ${operar(n1, n2, input)}`);

/*11. Sumar N números pares.*/

let n = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function sumarPares(array) {
    let suma = [0];
    array = 0;
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese ${i}° numero: `))
        array.push(input)
    }
    for(let i = 0; i < array.length; i++ ){
        if(array[i] % 2 == 0){
            suma += array[i];
        }
    }
    return suma;
};
console.log(`Resultado de suma pares es: ${sumarPares(n)}`)

/*12. Sumar los N primeros pares. */

let Num = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function ImprimirPares(limite){
    pares = [];
    sumar = 0;
    for(let i = 2; i <= limite*2; i+=2){
        pares.push(i);
    }
    for(let i = 0 ; i < pares.length; i++){
        sumar += pares[i];
    }
    console.log(pares.join(" - "))
    return sumar;
};
console.log(`Resultado de suma es: ${ImprimirPares(Num)}`)

/*13. Sumar N números impares. */

let N = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function sumarImpares(array) {
    let suma = [0];
    array = 0;
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese ${i}° numero: `))
        array.push(input)
    }
    for(let i = 0; i < array.length; i++ ){
        if(array[i] % 2 ==! 0){
            suma += array[i];
        }
    }
    return suma;
};
console.log(`Resultado de suma pares es: ${sumarImpares(n)}`)


/*14. Sumar los N primeros impares. */

let Nume = parseInt(prompt("Ingresar indicar de numeros a ingresar:"))

function ImprimirImpares(limite){
    impares = [];
    sumar = 0;
    for(let i = 1; i <= limite*2; i+=2){
        impares.push(i);
    }
    for(let i = 0 ; i < impares.length; i++){
        sumar += impares[i];
    }
    console.log(impares.join(" - "))
    return sumar;
};
console.log(`Resultado de suma es: ${ImprimirImpares(Nume)}`)

/*15. Sumar los N primeros multiplos de 3 */

function sumaMult(limite){
    array = [];
    mult3 = [];
    sumar = 0;
    for(let i = 0; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese valor ${i} de ${limite}`))
        if(input <= 0){
            alert("ingrese un valor sobre 0 !!");
            return  console.log("Error!!")
        } else if (input > 0){
            array.push(input)
        } else {
            alert("Ingrese un valor numerico!!")
            return console.log("Error!!")
        }
    }
    for(let i = 0 ; i < array.length; i++){
        if(array[i] % 3 === 0){
            sumar += array[i];
            mult3.push(array[i]);
        }
    }
    console.log(` Valores ingresados ${array.join(" - ")}`)
    console.log(` Valores multiplos de 3 ${mult3.join(" - ")}`)
    return sumar;
};
let numero = parseInt(prompt("Indicar cantidad de numeros a tabajar: "))
console.log(`Resultado de suma es: ${sumaMult(numero)}`)

//16. Calcular el factorial de N

function calcularFactorial(N) {
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    return factorial;
}

//17. Conversión de grados Celsius a Fahrenheit

function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/*18. Busqueda de la palabra mas larga en una frase */

function palabraLara(frase){
    array = []
    array = frase.split(" ")
    largo = "";
    for (let i = 0; i < array.length; i++){
        if (array[i] > largo){
            largo = array[i];
        }
    }
    return `La palabra mas larga es: ${largo} con una longitud de ${largo.length} caracteres`;
}

//19. Impresión de números primos menores o iguales a un número dado

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function imprimirPrimosHasta(N) {
    for (let i = 2; i <= N; i++) {
        if (esPrimo(i)) {
            console.log(i);
        }
    }
}

//20. Contador de caracteres en una cadena de texto

function contarCaracteres(cadena) {
    const contador = {};
    for (let caracter of cadena) {
        if (contador[caracter]) {
            contador[caracter]++;
        } else {
            contador[caracter] = 1;
        }
    }
    return contador;
}

//21. Ingresar N valores e imprimir solo los pares

function imprimirPares(valores) {
    const pares = valores.filter(valor => valor % 2 === 0);
    console.log("Números pares:", pares.join(", "));
}