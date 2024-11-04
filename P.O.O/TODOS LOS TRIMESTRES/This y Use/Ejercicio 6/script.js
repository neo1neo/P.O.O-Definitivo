
function agregarNombre(boton) {
    let inputNombre = document.getElementById("nombre");
    let nuevoNombre = inputNombre.ariaValueMax.trim();
    
    if(nuevoNombre === ""){
        alert("Por favor ingrese un valor valido!");
        return;
    }

    nombres.push(nuevoNombre);

    let listaNombres = document.getElementById("listaNombres");
    let li = document.createElement("li");
    li.textContent = nuevoNombre;
    listaNombres.appendChild(li);

    inputNombre.value = "";
    boton.style.backgroundColor = 'green';
}