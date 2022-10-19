import popUp from './popUp.js';
import displayCounter from './counterFile.js';

const displayData = async (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.classList.add('card-food');
    item.innerHTML = `
          <div class='card-title'>
            <h5>${food.strMeal}</h5>
          </div>
          <div class=btn-recipe>
            <button type='button' class='comments'>Recipe</button>
          </div>
          <div class='btn-liked'>
            <button type='button'>Like</button>
          </div>
          <div class='card-img'>
           <img src="${food.strMealThumb}" class='img-food'>        
          </div>     
      `;
    item.id = food.idMeal;
    board.appendChild(item);
  });
  const buttonComments = document.querySelectorAll('.comments');
  buttonComments.forEach((element, index) => {
    element.addEventListener('click', () => {
      popUp(index);
    });
  });
};

const getAllData = async (url, foodChosen) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responseInfo = responseJson.meals;
  await displayData(responseInfo);
  const itemcount = document.querySelectorAll('article');
  displayCounter(foodChosen, itemcount.length);
};

export { getAllData as default };
