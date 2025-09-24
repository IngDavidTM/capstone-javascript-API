import './index.css';
import { DEFAULT_CATEGORY } from './constants/api.js';
import renderMealsForCategory, {
  renderMealsFromList,
  renderEmptyMealsState,
} from './ui/renderMeals.js';
import {
  fetchMealCategories,
  fetchAreasList,
  fetchIngredientsList,
  searchMealsByName,
  searchMealsByFirstLetter,
  fetchMealsByArea,
  fetchMealsByIngredient,
  fetchRandomMeal,
} from './api/mealsApi.js';
import showMealModal from './ui/showMealModal.js';

const categoryList = document.getElementById('categoryList');
const searchByNameForm = document.getElementById('searchByNameForm');
const searchByNameInput = document.getElementById('searchByNameInput');
const searchByLetterForm = document.getElementById('searchByLetterForm');
const searchByLetterInput = document.getElementById('searchByLetterInput');
const areaFilter = document.getElementById('areaFilter');
const ingredientFilter = document.getElementById('ingredientFilter');
const randomMealButton = document.getElementById('randomMealButton');
const resultsContext = document.getElementById('resultsContext');
const mealBoard = document.querySelector('.container-food-cards');

let activeCategoryElement = null;

const setResultsContext = (message) => {
  if (resultsContext) {
    resultsContext.textContent = message;
  }
};

const showLoadingState = (message = 'Loading meals...') => {
  if (!mealBoard) {
    return;
  }
  mealBoard.innerHTML = `
    <div class="empty-state empty-state--loading">
      <span class="loader" aria-hidden="true"></span>
      <p>${message}</p>
    </div>
  `;
};

const clearActiveCategory = () => {
  if (activeCategoryElement) {
    activeCategoryElement.classList.remove('selected');
    activeCategoryElement = null;
  }
};

const resetFilters = (exception) => {
  if (exception !== 'searchByName' && searchByNameForm) {
    searchByNameForm.reset();
  }
  if (exception !== 'searchByLetter' && searchByLetterForm) {
    searchByLetterForm.reset();
  }
  if (exception !== 'area' && areaFilter) {
    areaFilter.value = '';
  }
  if (exception !== 'ingredient' && ingredientFilter) {
    ingredientFilter.value = '';
  }
};

const renderAndSummarize = async (
  mealsPromise,
  {
    loadingMessage,
    emptyMessage,
    successFormatter,
    highlightElement = null,
  },
) => {
  showLoadingState(loadingMessage);
  try {
    const meals = await mealsPromise;
    const count = await renderMealsFromList(meals, {
      highlightElement,
      emptyMessage,
    });
    setResultsContext(
      count
        ? successFormatter(count)
        : emptyMessage,
    );
    return count;
  } catch (error) {
    setResultsContext('We could not load meals right now. Please try again later.');
    renderEmptyMealsState('Something went wrong while loading meals.');
    return 0;
  }
};

const handleCategorySelection = async (categoryName, element) => {
  if (!categoryName || !element) {
    return;
  }

  if (activeCategoryElement === element) {
    return;
  }

  clearActiveCategory();
  element.classList.add('selected');
  activeCategoryElement = element;
  resetFilters('category');

  showLoadingState(`Loading ${categoryName} meals...`);
  setResultsContext(`Exploring ${categoryName} meals...`);

  try {
    const count = await renderMealsForCategory(categoryName, element);
    setResultsContext(
      count
        ? `Showing ${count} ${categoryName} meal${count === 1 ? '' : 's'}`
        : `No meals found for ${categoryName}.`,
    );
  } catch (error) {
    setResultsContext(`Unable to load ${categoryName} meals right now.`);
    renderEmptyMealsState('Something went wrong while loading meals.');
  }
};

const createCategoryChip = (categoryName) => {
  const chip = document.createElement('li');
  chip.textContent = categoryName;
  chip.dataset.label = categoryName;
  chip.tabIndex = 0;
  chip.setAttribute('role', 'button');
  chip.addEventListener('click', () => handleCategorySelection(categoryName, chip));
  chip.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCategorySelection(categoryName, chip);
    }
  });
  return chip;
};

const populateCategories = async () => {
  if (!categoryList) {
    return;
  }

  categoryList.innerHTML = '';

  try {
    const categories = await fetchMealCategories();
    if (!categories || !categories.length) {
      setResultsContext('No categories available right now.');
      renderEmptyMealsState('No meals to display just yet.');
      return;
    }

    let defaultChip = null;
    categories.forEach((category) => {
      const chip = createCategoryChip(category.strCategory);
      categoryList.appendChild(chip);
      if (category.strCategory === DEFAULT_CATEGORY) {
        defaultChip = chip;
      }
    });

    const firstChip = defaultChip || categoryList.firstElementChild;
    if (firstChip) {
      await handleCategorySelection(firstChip.dataset.label, firstChip);
    }
  } catch (error) {
    setResultsContext('Unable to load categories at the moment.');
    renderEmptyMealsState('Unable to reach the meals service.');
  }
};

const populateAreaFilter = async () => {
  if (!areaFilter) {
    return;
  }

  try {
    const areas = await fetchAreasList();
    areaFilter.innerHTML = '<option value="">Filter by area</option>';
    if (!areas || !areas.length) {
      areaFilter.disabled = true;
      return;
    }

    areas
      .map((entry) => entry.strArea)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b))
      .forEach((area) => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaFilter.appendChild(option);
      });
  } catch (error) {
    areaFilter.innerHTML = '<option value="">Areas unavailable</option>';
    areaFilter.disabled = true;
  }
};

const populateIngredientFilter = async () => {
  if (!ingredientFilter) {
    return;
  }

  try {
    const ingredients = await fetchIngredientsList();
    ingredientFilter.innerHTML = '<option value="">Filter by ingredient</option>';
    if (!ingredients || !ingredients.length) {
      ingredientFilter.disabled = true;
      return;
    }

    ingredients
      .map((entry) => entry.strIngredient)
      .filter(Boolean)
      .slice(0, 60)
      .sort((a, b) => a.localeCompare(b))
      .forEach((ingredient) => {
        const option = document.createElement('option');
        option.value = ingredient;
        option.textContent = ingredient;
        ingredientFilter.appendChild(option);
      });
  } catch (error) {
    ingredientFilter.innerHTML = '<option value="">Ingredients unavailable</option>';
    ingredientFilter.disabled = true;
  }
};

searchByNameForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchByNameInput?.value.trim();
  if (!query) {
    return;
  }

  clearActiveCategory();
  resetFilters('searchByName');

  const quotedQuery = `“${query}”`;
  renderAndSummarize(searchMealsByName(query), {
    loadingMessage: `Searching meals for ${quotedQuery}...`,
    emptyMessage: `No meals found for ${quotedQuery}.`,
    successFormatter: (count) => `${count} meal${count === 1 ? '' : 's'} found for ${quotedQuery}.`,
  });
});

if (searchByLetterInput) {
  searchByLetterInput.addEventListener('input', () => {
    const { value } = searchByLetterInput;
    const sanitized = value.replace(/[^a-zA-Z]/g, '').slice(0, 1);
    searchByLetterInput.value = sanitized.toUpperCase();
  });
}

searchByLetterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const letter = searchByLetterInput?.value.trim().toLowerCase();
  if (!letter) {
    return;
  }

  clearActiveCategory();
  resetFilters('searchByLetter');

  const upperLetter = letter.toUpperCase();
  renderAndSummarize(searchMealsByFirstLetter(letter), {
    loadingMessage: `Finding meals starting with “${upperLetter}”...`,
    emptyMessage: `No meals found starting with “${upperLetter}”.`,
    successFormatter: (count) => `${count} meal${count === 1 ? '' : 's'} starting with “${upperLetter}”.`,
  });
});

areaFilter?.addEventListener('change', (event) => {
  const area = event.target.value;
  if (!area) {
    return;
  }

  clearActiveCategory();
  resetFilters('area');

  renderAndSummarize(fetchMealsByArea(area), {
    loadingMessage: `Fetching specialties from ${area}...`,
    emptyMessage: `No meals found for the ${area} area.`,
    successFormatter: (count) => `${count} meal${count === 1 ? '' : 's'} from ${area}.`,
  });
});

ingredientFilter?.addEventListener('change', (event) => {
  const ingredient = event.target.value;
  if (!ingredient) {
    return;
  }

  clearActiveCategory();
  resetFilters('ingredient');

  renderAndSummarize(fetchMealsByIngredient(ingredient), {
    loadingMessage: `Looking for meals with ${ingredient}...`,
    emptyMessage: `No meals found using ${ingredient}.`,
    successFormatter: (count) => `${count} meal${count === 1 ? '' : 's'} using ${ingredient}.`,
  });
});

randomMealButton?.addEventListener('click', async () => {
  try {
    const meal = await fetchRandomMeal();
    if (!meal) {
      setResultsContext('Could not fetch a random meal right now.');
      return;
    }
    showMealModal(meal, meal.idMeal);
  } catch (error) {
    setResultsContext('Could not fetch a random meal right now.');
  }
});

const initialiseApp = async () => {
  showLoadingState('Loading meals...');
  await Promise.allSettled([
    populateAreaFilter(),
    populateIngredientFilter(),
  ]);
  await populateCategories();
};

initialiseApp();
