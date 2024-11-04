
function agregarNombre(button) {
    const input = button.previousElementSibling;
    const nombre = input.value;
    if (nombre) {
        const lista = document.getElementById('listaNombres');
        lista.innerHTML += `<li>${nombre}</li>`;
        input.value = '';
    }
}