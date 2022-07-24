const value = document.querySelector('#value');
const decreaseButton = document.querySelector('[data-action="decrement"]');
const increaseButton = document.querySelector('[data-action="increment"]');


let counterValue = 0;

const valueDecrease = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const valueIncrease = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decreaseButton.addEventListener('click', valueDecrease);
increaseButton.addEventListener('click', valueIncrease);
