import './style.css';
import { sendData, nameInput, scoreInput } from '../module/addItem.js';
import renderUserScore from '../module/display';

const formContent = document.querySelector('.input-form');
formContent.addEventListener('submit', (event) => {
  event.preventDefault();
  sendData();
  nameInput.value = '';
  scoreInput.value = '';
});
const refreshToDisplay = document.querySelector('.refresh');
refreshToDisplay.addEventListener('click', (event) => {
  event.preventDefault();
  renderUserScore();
});
