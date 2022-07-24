const form = document.querySelector('.login-form');
const mailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.currentTarget.elements);
    if (event.currentTarget.elements.value === '') {
        alert('Всі поля повинні бути заповнені!');
    }
})

