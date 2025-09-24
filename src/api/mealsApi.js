import {
  mealDetailsUrl,
  mealsByCategoryUrl,
  mealSearchByNameUrl,
  mealSearchByFirstLetterUrl,
  randomMealUrl,
  mealCategoriesUrl,
  mealsByAreaUrl,
  mealsByIngredientUrl,
  areasListUrl,
  categoriesListUrl,
  ingredientsListUrl,
} from '../constants/api.js';

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Unable to fetch data from Meal DB');
  }
  return response.json();
};

const extractMeals = (payload) => payload.meals ?? [];

export const fetchMealsByCategory = async (category) => {
  const data = await fetchJson(mealsByCategoryUrl(category));
  return extractMeals(data);
};

export const fetchMealsByArea = async (area) => {
  const data = await fetchJson(mealsByAreaUrl(area));
  return extractMeals(data);
};

export const fetchMealsByIngredient = async (ingredient) => {
  const data = await fetchJson(mealsByIngredientUrl(ingredient));
  return extractMeals(data);
};

export const searchMealsByName = async (name) => {
  const data = await fetchJson(mealSearchByNameUrl(name));
  return extractMeals(data);
};

export const searchMealsByFirstLetter = async (letter) => {
  const data = await fetchJson(mealSearchByFirstLetterUrl(letter));
  return extractMeals(data);
};

export const fetchMealDetails = async (mealId) => {
  const data = await fetchJson(mealDetailsUrl(mealId));
  const [meal] = extractMeals(data);
  return meal ?? null;
};

export const fetchRandomMeal = async () => {
  const data = await fetchJson(randomMealUrl());
  const [meal] = extractMeals(data);
  return meal ?? null;
};

export const fetchMealCategories = async () => {
  const response = await fetchJson(mealCategoriesUrl());
  return response.categories ?? [];
};

export const fetchCategoriesList = async () => {
  const data = await fetchJson(categoriesListUrl());
  return extractMeals(data);
};

export const fetchAreasList = async () => {
  const data = await fetchJson(areasListUrl());
  return extractMeals(data);
};

export const fetchIngredientsList = async () => {
  const data = await fetchJson(ingredientsListUrl());
  return extractMeals(data);
};
