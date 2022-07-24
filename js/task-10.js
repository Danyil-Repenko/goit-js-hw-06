function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const numberInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('div#boxes');

let boxes = [];

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

};

const onCreateButtomClick = () => {
  createBoxes(numberInput.value);
  boxesContainer.append(...boxes);
  boxes = [];
}

const onDestroyButtomClick = () => {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', onCreateButtomClick);
destroyButton.addEventListener('click', onDestroyButtomClick);
