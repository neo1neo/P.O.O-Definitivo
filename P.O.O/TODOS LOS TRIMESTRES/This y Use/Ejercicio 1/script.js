
function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
    if (elemento.textContent === 'Clickeado!'){
        elemento.style.backgroundColor = '';
        elemento.textContent = 'Hazme clic';
    }else{
    elemento.style.backgroundColor = 'yellow';
    elemento.textContent = 'Clickeado!';
    }
}

function ejemplo1(elemento) {
    console.log("elemento clickeado", elemento);
    if (elemento.textContent === 'Activado'){
    elemento.style.backgroundColor = '';
    elemento.textContent = 'Desactivado';
    }else{
        elemento.style.backgroundColor = 'green';
        elemento.textContent = 'Activado'
    }
}

function ejemplo2(elemento) {
    console.log("elemento clickeado", elemento);
    if (elemento.textContent === 'DIJE NO TOCAR >:C') {
        elemento.style.backgroundColor = '';
        elemento.textContent = 'NO TOCAR!';
    } else {
        elemento.style.backgroundColor = 'red';
        elemento.textContent = 'DIJE NO TOCAR >:C';
    }
}

function hide(element) {
    element.remove();
}