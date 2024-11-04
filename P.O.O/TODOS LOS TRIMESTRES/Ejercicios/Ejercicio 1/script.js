console.log("Hola mundo")

var global = "global"
let local = "local"
const constante = "constante"

console.log("Variable global:" + global + "-local:"+ local + "-constante"+ constante)

let numeroEntero = 777;
let numeroDecimal = 3.14;
let cadenaTexto = "Hunter x Hunter";
let booleano = true;
let arreglo = [1, 2, 3, 4, 5];
let objeto = { luffy: "gomu", zoro: "katana", sanji: "pierna", nami:"pole", usopp:"tirachinas", choper:"hito:human" , brook:"yomi" , robin:"hana" , jimbe:"fishmankarate" , franky:"cyborg"};
let indefinida;
let nulo = null;

const operacion = function(num1, num2) {
    return num1 + num2;
};
console.log(operacion(110,440))

var nombre = "kevin";
var edad = 17;

console.log("numeroEntero:", numeroEntero);
console.log("numeroDecimal:", numeroDecimal);
console.log("cadenaTexto:", cadenaTexto);
console.log("booleano:", booleano);
console.log("arreglo:", arreglo);
console.log("objeto:", objeto);
console.log("indefinida:", indefinida);
console.log("nulo:", nulo);

console.log("numeroEntero:" + numeroEntero + "\nnumeroDecimal:" + numeroDecimal + "\ncadenaTexto:" + cadenaTexto + "\nbooleano:" + booleano + "\narreglo:"+ arreglo + "\nobjeto:"+ objeto +"\nindefinida:"+ indefinida + "\nnulo:"+ nulo);

const resultado = operacion(numeroEntero, numeroDecimal);
console.log("Resultado de la operación:", resultado);
