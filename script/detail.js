import { container, buttonSave } from './dom.js';
import { handleAuthUser, handleLogOut } from './auth.js';
import {
  getFoodDetailByID,
  getFoodInformation,
  getListFoodsAPI,
  setFavoriteFoods,
  getUserFavorite,
} from './service.js';

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);
const sidebar = document.getElementById('sidebar');
let foodActive = {};
//SideBar
const sideBarComponent = async () => {
  const foods = await getListFoodsAPI(5);
  writeSideBarItem(foods);
};

const writeSideBarItem = (foods) => {
  foods.map((food, i) => {
    const { title, image, id } = food;

    sidebar.innerHTML += ` <div class="card mb-3  row g-0 d-flex flex-row w-100 " style="max-width: 400px;">
                              <div class=" w-100">
                                  <img src=${image} class="img-fluid rounded" alt="...">
                              </div>
                              <div class="w-100 h-50 mt-3 mb-3 text-center">
                                  <a href="./detail.html?${id}" class="text-decoration-none">
                                  <h5 class="card-title text-decoration-none text-dark">${title}</h5></a>
                              </div>
                          </div>`;
  });
};
// Get FOOD ACTIVE
async function getAnchorQuery() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }

  const food = await getFoodInformation(id);

  if (food.nutrition != null) {
    writeNutritionToHtml(food.nutrition);
  }
  writeDetailToHtml(food.image, food.title, food.summary);

  return (foodActive = food);
}

const writeDetailToHtml = (image, namefood, description) => {
  const img = document.getElementById('imgfood');
  const name = document.getElementById('foodName');
  const descripe = document.getElementById('foodDesc');
  img.innerHTML = `<img src=${image}  alt=${image} >`;
  name.innerText = `${namefood}`;
  descripe.innerHTML = `${description}`;
};
const writeNutritionToHtml = (nutritions) => {
  const { nutrients } = nutritions;
  const nutribox = document.getElementById('nutribox');
  nutrients.map((value, i) => {
    nutribox.innerHTML += `<li class="ml-2 mt-2"><h6>${value.name} :</h6>  <h6 class="nutri-value">  ${value.amount}</h6></li>`;
  });
};
const recentFoods = JSON.parse(getUserFavorite());
getAnchorQuery();

//SAVE FOODS
const handleSaveFavorite = () => {
  let newarray = [];
  if (recentFoods != null) {
    recentFoods.push(foodActive);
    alert('save food success');
    return localStorage.setItem(
      'favorite',
      JSON.stringify(recentFoods)
    );
  }
  newarray.push(foodActive);
  alert('save food success');
  return localStorage.setItem('favorite', JSON.stringify(newarray));
};

buttonSave.addEventListener('click', () => {
  handleSaveFavorite();
});
sideBarComponent();
