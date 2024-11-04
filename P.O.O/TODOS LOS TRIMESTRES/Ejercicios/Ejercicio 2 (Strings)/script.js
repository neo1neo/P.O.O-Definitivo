console.log("vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = 2024;
    let fecha_nac = 2006;
    let resultado = ahora - fecha_nac;
    alert("Mi edad es: " + resultado);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = 45;
    let var2 = var1;
    alert("El valor de var2 es: " + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1' y 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    // Tu código aquí
    let num1 = 7;
    let num2 = 16;
    let num3 = 42;
    let suma = num1 + num2 + num3
    let resta = num1 - num3;
    let multi = num2 * num3;
    let divi = num1 / 120;
    
    alert(`la suma es: ${suma}  \n la resta es: ${resta} \n la multi es: ${multi} \n la division es: ${divi} `);
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
    function manipularCadenas() {
    // Tu código aquí
    let direccion = "tepual";
    let n_casa = "8401";
    let mens = direccion + " " + n_casa;
    let long = mens.length;
    alert(`Direccion: ${mens} \nLongitud: ${long} \nantepenultimo Caracter:${mens[3]}`);
    }
    
    // Ejercicio 5:suma de valores
    // Instrucciones: Crear una función llamada “Suma_indices()”
    // Crear un arreglo  de largo 7 (1,2,3,4,5,6,7)
    // Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones
    // Mostrar el resultado en el HTML con un Alert
    function Suma_indices() {
    let array = [1, 2, 3, 4, 5, 6, 7];
    let long2 = array[array.length -1]
    let long3 = array[array.length -2]
    let long1 = array[0];
    let resul = long1 + long2 + long3
    
    alert("el resultado es :"+ resul )
    }