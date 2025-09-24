export const MEALDB_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
export const INVOLVEMENT_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
export const INVOLVEMENT_APP_ID = 'JGerHk43c1Y5J5m1thia';

export const DEFAULT_CATEGORY = 'Beef';

export const involvementLikesEndpoint = () => `${INVOLVEMENT_BASE_URL}/${INVOLVEMENT_APP_ID}/likes/`;
export const involvementCommentsEndpoint = () => `${INVOLVEMENT_BASE_URL}/${INVOLVEMENT_APP_ID}/comments`;

export const mealSearchByNameUrl = (name) => `${MEALDB_BASE_URL}/search.php?s=${encodeURIComponent(name)}`;
export const mealSearchByFirstLetterUrl = (letter) => `${MEALDB_BASE_URL}/search.php?f=${encodeURIComponent(letter)}`;
export const mealDetailsUrl = (mealId) => `${MEALDB_BASE_URL}/lookup.php?i=${encodeURIComponent(mealId)}`;
export const randomMealUrl = () => `${MEALDB_BASE_URL}/random.php`;
export const mealCategoriesUrl = () => `${MEALDB_BASE_URL}/categories.php`;
export const mealsByCategoryUrl = (category) => `${MEALDB_BASE_URL}/filter.php?c=${encodeURIComponent(category)}`;
export const mealsByAreaUrl = (area) => `${MEALDB_BASE_URL}/filter.php?a=${encodeURIComponent(area)}`;
export const mealsByIngredientUrl = (ingredient) => `${MEALDB_BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`;
export const areasListUrl = () => `${MEALDB_BASE_URL}/list.php?a=list`;
export const categoriesListUrl = () => `${MEALDB_BASE_URL}/list.php?c=list`;
export const ingredientsListUrl = () => `${MEALDB_BASE_URL}/list.php?i=list`;
