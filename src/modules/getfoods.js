import popUp from './popUp.js';

const displayData = (arr) => {
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

const getAllData = async (url) => {
  const request = new Request(url);
  const response = await fetch(request);
  const responseJson = await response.json();
  const responsInfo = responseJson.meals;

  displayData(responsInfo);
};

export { getAllData as default };
