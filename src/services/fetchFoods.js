export const getFoodsIngredients = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsName = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsFirstLetter = async (search) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const fetchFoods = await fetch(url);
  const data = await fetchFoods.json();
  return data.meals;
};

export const getCategoriesFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const fetchCategories = await fetch(url);
  const data = await fetchCategories.json();
  return data.meals;
};

export const filterFoods = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const fetchFoodByFilter = await fetch(url);
  const data = await fetchFoodByFilter.json();
  return data.meals;
};

export const getFoodsId = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
