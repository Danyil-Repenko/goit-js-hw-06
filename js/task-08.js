const form = document.querySelector('.login-form');

const onFormSubmited = (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Всі поля повинні бути заповнені!');
        return;
    }

    const submitedValues = {
        [formElements.email.name]: formElements.email.value,
        [formElements.password.name]: formElements.password.value,
    }

    console.log(submitedValues);

    event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmited);


