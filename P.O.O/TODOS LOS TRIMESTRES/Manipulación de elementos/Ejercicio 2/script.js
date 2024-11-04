
function invertirtexto() {
    let caracteres = document.getElementById("inputText").value;
    let caracteresInvertidos = [];
    for (var i = caracteres.length - 1; i >= 0; i--) {
        caracteresInvertidos.push(caracteres[i]);
    }
    let textoInvertido = caracteresInvertidos.join('');
    document.getElementById("lista").innerHTML = textoInvertido;
}