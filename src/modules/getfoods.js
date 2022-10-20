import popUp from './popUp.js';
import displayCounter from './counterFile.js';
import { addLikeToItem, getLikesToItems } from './like.js';

const displayData = async (arr) => {
  const board = document.querySelector('.container-food-cards');
  board.innerHTML = '';
  arr.forEach((food) => {
    const item = document.createElement('article');
    item.id = food.idMeal;
    item.classList.add('card-food');
    item.innerHTML = `
          <div class='card-title'>
            <h5>${food.strMeal}</h5>
          </div>
          <button type='button' class='btn-recipe'>Recipe</button>
          <div>
          </div>
          <div class='btn-liked'>
            Like
          </div>
          <div class='card-img'>
           <img src="${food.strMealThumb}" class='img-food'>        
          </div>     
      `;
    const btnLikedElement = item.querySelector('.btn-liked');
    const printLike = (data) => {
      const likesReturned = data.find(
        (element) => element.item_id === food.idMeal,
      );
      btnLikedElement.innerHTML = likesReturned !== undefined ? `<i class="fas fa-heart"></i> (${likesReturned.likes})` : '<i class="far fa-heart"></i> (0)';
    };
    getLikesToItems()
      .then(printLike)
      .catch((e) => e);

    btnLikedElement.addEventListener('click', () => {
      addLikeToItem(food.idMeal);
      getLikesToItems()
        .then(printLike)
        .catch((e) => e);
    });
    board.appendChild(item);
  });
  const buttonComments = document.querySelectorAll('.btn-recipe');
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
