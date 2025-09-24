import { fetchMealsByCategory } from '../api/mealsApi.js';
import { fetchLikesSnapshot, registerLike } from '../services/likesService.js';
import { updateCategoryCount } from '../utils/counters.js';
import showMealModal from './showMealModal.js';

const buildLikeMarkup = (likesCount) => {
  const iconClass = likesCount > 0 ? 'fas fa-heart' : 'far fa-heart';
  const label = likesCount === 1 ? 'like' : 'likes';
  return `
    <i class="${iconClass}" aria-hidden="true"></i>
    <span>${likesCount} ${label}</span>
  `;
};

const refreshLikeDisplay = (button, likesMap, itemId) => {
  const likesCount = likesMap.get(itemId) ?? 0;
  button.innerHTML = buildLikeMarkup(likesCount);
};

const createMealCard = (meal, likesMap, index) => {
  const card = document.createElement('article');
  card.id = meal.idMeal;
  card.classList.add('card-food');
  card.innerHTML = `
    <div class='card-img'>
      <img src="${meal.strMealThumb}" class='img-food' alt='${meal.strMeal} meal image'>
    </div>
    <div class='card-body'>
      <div class='card-title'>
        <h5>${meal.strMeal}</h5>
      </div>
      <div class='card-footer'>
        <div class='btn-group'>
          <button type='button' class='btn-recipe'>View recipe</button>
          <button type='button' class='btn-liked'>Like</button>
        </div>
      </div>
    </div>
  `;

  const likeButton = card.querySelector('.btn-liked');
  refreshLikeDisplay(likeButton, likesMap, meal.idMeal);
  likeButton.setAttribute('aria-label', `Give a like to ${meal.strMeal}`);

  likeButton.addEventListener('click', async () => {
    await registerLike(meal.idMeal);
    const updatedLikes = await fetchLikesSnapshot();
    const updatedMap = new Map(updatedLikes.map((item) => [item.item_id, item.likes]));
    refreshLikeDisplay(likeButton, updatedMap, meal.idMeal);
  });

  const recipeButton = card.querySelector('.btn-recipe');
  recipeButton.setAttribute('aria-label', `Open recipe modal for ${meal.strMeal}`);
  recipeButton.addEventListener('click', () => {
    showMealModal(meal, index);
  });

  return card;
};

const buildLikesMap = (likesArray) => new Map(likesArray.map((item) => [item.item_id, item.likes]));

const renderMealsForCategory = async (category, categoryElement) => {
  const board = document.querySelector('.container-food-cards');
  if (!board) {
    return;
  }

  const [meals, likesSnapshot] = await Promise.all([
    fetchMealsByCategory(category),
    fetchLikesSnapshot(),
  ]);

  const likesMap = buildLikesMap(likesSnapshot);
  board.innerHTML = '';

  meals.forEach((meal, index) => {
    const card = createMealCard(meal, likesMap, index);
    board.appendChild(card);
  });

  updateCategoryCount(categoryElement, meals.length);
};

export default renderMealsForCategory;
