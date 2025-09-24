import { fetchMealsByCategory } from '../api/mealsApi.js';
import { fetchLikesSnapshot, registerLike } from '../services/likesService.js';
import { updateCategoryCount } from '../utils/counters.js';
import showMealModal from './showMealModal.js';

const board = document.querySelector('.container-food-cards');

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

const createMealCard = (meal, likesMap) => {
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
    showMealModal(meal, meal.idMeal);
  });

  return card;
};

const buildLikesMap = (likesArray) => new Map(likesArray.map((item) => [item.item_id, item.likes]));

const renderEmptyState = (message) => {
  if (!board) {
    return;
  }
  board.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'empty-state';
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  wrapper.appendChild(paragraph);
  board.appendChild(wrapper);
};

const renderMealCollection = (meals, likesMap, emptyMessage) => {
  if (!board) {
    return 0;
  }

  if (!meals.length) {
    renderEmptyState(emptyMessage);
    return 0;
  }

  board.innerHTML = '';

  meals.forEach((meal) => {
    const card = createMealCard(meal, likesMap);
    board.appendChild(card);
  });

  return meals.length;
};

const renderMealsWithLikes = async (meals, categoryElement, emptyMessage) => {
  const normalizedMeals = Array.isArray(meals) ? meals : [];
  let likesSnapshot = [];
  try {
    likesSnapshot = await fetchLikesSnapshot();
  } catch (error) {
    likesSnapshot = [];
  }
  const likesMap = buildLikesMap(likesSnapshot);
  const renderedCount = renderMealCollection(normalizedMeals, likesMap, emptyMessage);

  if (categoryElement) {
    updateCategoryCount(categoryElement, renderedCount);
  }

  return renderedCount;
};

const renderMealsForCategory = async (category, categoryElement) => {
  const meals = await fetchMealsByCategory(category);
  return renderMealsWithLikes(
    meals,
    categoryElement,
    `No meals found for ${category}.`
  );
};

export const renderMealsFromList = async (meals, options = {}) => {
  const { highlightElement = null, emptyMessage = 'No meals to show right now.' } = options;
  return renderMealsWithLikes(meals, highlightElement, emptyMessage);
};

export const renderEmptyMealsState = (message) => renderEmptyState(message);

export default renderMealsForCategory;
