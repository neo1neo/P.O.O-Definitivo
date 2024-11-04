
// Los dos van a seleccionar la etiqueta hl
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

var logoImg = document.querySelector(".nav img");

var h3 = document.querySelector("h3");
h3.innerText = "New Title";

var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "img/pet.jpg";  
}

function setActive1(element1) {
    element1.style.backgroundColor = "#222222";
    element1.style.color = "#ffffff";
}

function setActive2(element2) {
    element2.classList.add("dark-mode");
}

function setActive3(element3) {
    if(element3.classList.includes("dark-mode")) {
        element3.innerText = "Cambiar al modo claro";
        element3.classList.remove("dark-mode");
    } else {
        element3.innerText = "Cambiar al modo oscuro";
        element3.classList.add("dark-mode");
    }
}