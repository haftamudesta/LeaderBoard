import { resieveData } from '../module/addItem';

const content = document.querySelector('.name-score');
const renderUserScore = async () => {
  content.innerHTML = '';
  const players = await resieveData();
  console.log('result', players.result);
  players.result.sort((a, b) => b.score - a.score);
  players.result.forEach((player) => {
    content.innerHTML += `<li>${player.user} : ${player.score}</li>`;
  });
};
export { renderUserScore as default };
