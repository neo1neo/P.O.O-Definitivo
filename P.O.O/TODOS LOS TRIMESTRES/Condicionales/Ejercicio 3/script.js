function verificarAcceso() {
    let resul = "";

    let nombreUsuario = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

    if (nombreUsuario === "kevin" && contraseña === "hola01") {
        resul = "<h2>Acceso concedido</h2>";
    } 
    else {
        resul = "<h2>Acceso denegado</h2>";
    }

    document.getElementById('lista').innerHTML = resul;
}