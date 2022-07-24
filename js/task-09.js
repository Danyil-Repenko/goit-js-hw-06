function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const colorName = document.querySelector('.color');
const changeColorButton = document.querySelector('button.change-color');

const onButtomClick = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;

  colorName.textContent = randomColor;
};

changeColorButton.addEventListener('click', onButtomClick);
