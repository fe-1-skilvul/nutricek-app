const putToLocalStorage = (data) => {
  localStorage.setItem('userdata', JSON.stringify(data));
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userdata'));
};
const putActiveUser = (data) => {
  localStorage.setItem('activeUser', JSON.stringify(data));
};
const getActiveUser = () => {
  return JSON.parse(localStorage.getItem('activeUser'));
};

const BASE_URL = 'https://api.spoonacular.com/recipes';
const API_KEY = '4da635c6a35347ce8cce85199806fd80';
const INC_NUTRITION = 'includeNutrition=true';
const getPopularFoodsAPI = async () => {
  const url = `${BASE_URL}/random?apiKey=${API_KEY}&${INC_NUTRITION}`;
  const data = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .finally((data) => {
      return data;
    });
  console.log(data);
};

export {
  putToLocalStorage,
  getFromLocalStorage,
  putActiveUser,
  getActiveUser,
  getPopularFoodsAPI,
};

// trivia foods https://api.spoonacular.com/recipes/716429/information?apiKey=4da635c6a35347ce8cce85199806fd80&includeNutrition=true.
//random https://api.spoonacular.com/recipes/random?apiKey=4da635c6a35347ce8cce85199806fd80&includeNutrition=true.
//list food https://api.spoonacular.com/recipes/complexSearch?apiKey=4da635c6a35347ce8cce85199806fd80
// nutri by id https://api.spoonacular.com/recipes/716381/nutritionWidget.json?apiKey=4da635c6a35347ce8cce85199806fd80
// search https://api.spoonacular.com/recipes/complexSearch?apiKey=4da635c6a35347ce8cce85199806fd80&query=pasta
