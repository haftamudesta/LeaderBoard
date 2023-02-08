const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const myGame = 'Zl4d7IVkemOTTVg2fUdz';
const resieveData = async () => {
  try {
    const endpoint = new URL(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores'
    );
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const sendData = async () => {
  try {
    const sentData = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myGame}/scores`,
      {
        method: 'POST',
        body: JSON.stringify({
          user: nameInput.value,
          score: scoreInput.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    nameInput.value = '';
    scoreInput.value = '';
    return sentData.json();
  } catch (err) {
    return false;
  }
};

export { resieveData, sendData };
