function modificarMensaje() {
    const mensaje = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const eliminados = [];
    const mensajeInicial = mensaje.slice();
    
    eliminados.push(mensajeInicial.pop());
    eliminados.push(mensajeInicial.pop());
    eliminados.push(mensajeInicial.pop());

    eliminados.push(mensajeInicial.shift());
    eliminados.push(mensajeInicial.shift());

    mensajeInicial.unshift("Somos", "nosotros");
    mensajeInicial.push("los", "mejores", "del mundo");

    alert("Arreglo inicial: " + mensaje.join(", ") +
    "\nArreglo final: " + mensajeInicial.join(", ") +
    "\nValores eliminados: " + eliminados.join(", ") +
    "\nValores agregados: Somos, nosotros, los, mejores, del mundo");
}

function operandoMetodos(){
    const arrayInicial = [132, 243, 354, 465, 576, 687, 798, 819, 921, 1432];
    const array = arrayInicial.slice();

    const eliminaInicio = array.shift();
    const eliminaFinal = array.pop();
    array.push(777)
    array.unshift(777)

    const suma = array.reduce((total, valor) => total + valor, 0);

    alert("Arreglo inicial: " + arrayInicial.join(", ") +
    "\nArreglo final: " + array.join(", ") +
    "\nValor eliminado del inicio: " + eliminaInicio +
    "\nValor eliminado del final: " + eliminaFinal +
    "\nValor Agregado inicio: 777" +
    "\nValor Agregado final: 777" +
    "\nValor de suma: " + suma );
}