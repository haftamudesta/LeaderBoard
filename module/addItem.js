const content = document.querySelector('.name-score');
const items = [
  {
    Name: 'Name',
    score: 100,
  },
  {
    Name: 'Name',
    score: 20,
  },
  {
    Name: 'Name',
    score: 50,
  },
  {
    Name: 'Name',
    score: 78,
  },
  {
    Name: 'Name',
    score: 125,
  },
  {
    Name: 'Name',
    score: 77,
  },
  {
    Name: 'Name',
    score: 42,
  },
];
const rebder = () => {
  items.forEach((item) => {
    content.innerHTML += `<li>${item.Name} : ${item.score}</li>`;
  });
};
const users = {
  name: 'haftamu',
  score: 34,
};

const sendResieve = async () => {
  console.log('your code starts here');
  const endpoint = new URL(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores'
  );
  console.log('endpoint', endpoint);
  const response = await fetch(endpoint);
  console.log('response is:', response);
  const data = await response.json();
  console.log(data);
  console.log('data1 is here:');
  const sentData = new URL(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores',
    {
      mathod: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(users),
    }
  );
  console.log('data1 is here:');
  const data1 = sentData.json();
  console.log(data1);
};

export { rebder, sendResieve };
