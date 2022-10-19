import './index.css';
import getAllData from './modules/getfoods.js';

const allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';

const [liBeefElement] = document.querySelectorAll('li');
let foodChosen = liBeefElement;

liBeefElement.addEventListener('click', () => {
  foodChosen = liBeefElement;
  liBeefElement.classList.add('selected');
  foodChosen.textContent = 'Beef';
  getAllData(allBeefURL, foodChosen);
});

getAllData(allBeefURL, foodChosen);