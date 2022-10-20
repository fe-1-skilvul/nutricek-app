import { container, buttonSave } from './dom.js';
import {
  getFoodDetailByID,
  getFoodInformation,
  getListFoodsAPI,
  setFavoriteFoods,
  getUserFavorite,
} from './service.js';

const recentFoods = getUserFavorite();
const sideBarComponent = async () => {
  const sidebar = document.getElementById('sidebar');
  const foods = await getListFoodsAPI(5);

  foods.map((food, i) => {
    const { name, image, id } = food;

    sidebar.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                    <div class="col-md-7">
                                        <img src="..." class='${image}' alt="...">
                                    </div>
                                    <div class="col-md-5">
                                        <div class="card-body">
                                        <a href="./detail.html?${id}">
                                        <h5 class="card-title">${name}</h5></a>
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
  });
};
async function getAnchor() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }
  const nutrition = await getFoodDetailByID(id);
  const food = await getFoodInformation(id);

  console.log(food);
  writeDetailToHtml(food.image, food.title, food.summary);
}

const writeDetailToHtml = (image, namefood, description) => {
  const img = document.getElementById('imgfood');
  const name = document.getElementById('foodName');
  const descripe = document.getElementById('foodDesc');
  img.innerHTML = `<img src=${image}  alt=${image} >`;
  name.innerText = `${namefood}`;
  descripe.innerHTML = `${description}`;
};

// getAnchor();
const handleSaveFavorite = () => {
  console.log(recentFoods);
};

buttonSave.addEventListener('click', () => {
  handleSaveFavorite();
});
setFavoriteFoods('favorit', '[{object1},{object2}]');
