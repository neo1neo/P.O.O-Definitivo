document.querySelector('.login-btn').addEventListener('click', function() {
    if (this.textContent === 'Login') {
        this.textContent = 'Logout';
    } else {
        this.textContent = 'Login';
    }
});


document.querySelectorAll('.definition button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Ninja was liked');
    });
});

document.querySelector('.add-definition-btn').addEventListener('click', function() {
    this.style.display = 'none';
});