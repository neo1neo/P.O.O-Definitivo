console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
let ahora = 2024
let fecha_nac = 2006
let resultado = ahora - fecha_nac;

alert("Mi edad actual es: " + resultado);}

// Tu código aquí


// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
let var1 = 11
let var2 = var1;

alert("El valor de var 2 es: " +var2);

// Tu código aquí
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1' y 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre 'num120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
let num1 = 2;
let num2 = 4;
let num3 = 6;
let suma = num1 + num2 + num3;
let resta = num1 - num3;
let multiplica = num2 * num3;
let divide = num1 / 120;

alert("La suma es: " + suma + "\n La resta es: " + resta + "\n La multiplicación es: " + multiplica + "\n La división es: " + divide);

// Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
function manipularCadenas() {
let direccion = "Santa rosa";
let n_casa = "526";
let mensaje = "Yo vivo en " + direccion + " y el número de mi casa es " + n_casa;
let longitud = mensaje.length;
alert("Mensaje: " + mensaje +" \n Longitud: " + longitud + "\n Antepenultimo carácter: " + mensaje[48]);

}
// Tu código aquí

//Ejercicio 5: Suma de valores

function sumarIndices(){
     let valor = [1,2,3,4,5,6,7];
     let ultimoValor = valor[valor.length -1];
     let penultimoValor = valor[valor.length -2];
     let primerValor = valor[0];
     suma = ultimoValor + penultimoValor +primerValor;
     alert(`Resultado de la suma de los índices es: ${suma}`);
}
