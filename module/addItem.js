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
export { rebder };
