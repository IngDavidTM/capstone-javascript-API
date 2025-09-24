import './index.css';
import { DEFAULT_CATEGORY } from './constants/api.js';
import renderMealsForCategory from './ui/renderMeals.js';

const [beefCategory] = document.querySelectorAll('li');
let activeCategoryElement = beefCategory;

const loadDefaultCategory = () => {
  activeCategoryElement = beefCategory;
  activeCategoryElement.dataset.label = DEFAULT_CATEGORY;
  activeCategoryElement.classList.add('selected');
  activeCategoryElement.textContent = DEFAULT_CATEGORY;
  renderMealsForCategory(DEFAULT_CATEGORY, activeCategoryElement);
};

beefCategory.addEventListener('click', loadDefaultCategory);

loadDefaultCategory();
