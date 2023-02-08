import './style.css';
import { sendData } from '../module/addItem.js';
import renderUserScore from '../module/display';

const formContent = document.querySelector('.input-form');
formContent.addEventListener('submit', (event) => {
  event.preventDefault();
  sendData();
});
const refreshToDisplay = document.querySelector('.refresh');
refreshToDisplay.addEventListener('click', (event) => {
  event.preventDefault();
  renderUserScore();
});
