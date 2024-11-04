function contador(elemento){
    let contador = parseInt(elemento.getAttribute('data-contador') || '0');
    contador ++;
    elemento.setAttribute('data-contador', contador);
    elemento.textContent = 'Clics ' + contador;
}