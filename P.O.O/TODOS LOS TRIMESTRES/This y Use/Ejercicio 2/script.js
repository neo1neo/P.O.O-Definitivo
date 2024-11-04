function changeImage(element) {
    element.src = 'img/light.png';
    element.alt = 'Nueva Imagen';
    element.style.width = '250px';
    element.style.height = '250px';
}

function showDescription(button) {
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}

function completeTask(button) {
    let taskItem = button.parentElement;
    let taskText = taskItem.querySelector('span');
    taskText.classList.toggle('completed');
}

function applyDiscount(button) {
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
    let newPrice = (currentPrice * 0.4).toFixed(2);
    priceElement.textContent = `$${newPrice}`;
}