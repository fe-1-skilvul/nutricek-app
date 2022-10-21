import { container, buttonSave } from './dom.js';
import {
  getFoodDetailByID,
  getFoodInformation,
  getListFoodsAPI,
  setFavoriteFoods,
  getUserFavorite,
} from './service.js';

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
async function getAnchorQuery() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('?');
  let id = urlParts[1];
  if (urlParts.length === 1) {
    return console.log('error 404');
  }
  const nutrition = await getFoodDetailByID(id);
  const food = await getFoodInformation(id);

  if (food.nutrition != null) {
    writeNutritionToHtml(food.nutrition);
  }
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
const writeNutritionToHtml = (nutritions) => {
  const { nutrients } = nutritions;
  const nutribox = document.getElementById('nutribox');
  nutrients.map((value, i) => {
    nutribox.innerHTML += `<li class="ml-2 mt-2"><h6>${value.name} :</h6>  <h6 class="nutri-value">  ${value.amount}</h6></li>`;
  });
};
const recentFoods = JSON.parse(getUserFavorite());
getAnchorQuery();
const handleSaveFavorite = () => {
  if (recentFoods != null) {
    console.log(recentFoods);
    const newdata = {
      nama: 'soto betawi',
      asal: 'jawa',
    };
    recentFoods.push(newdata);
    // let recentData = recentFoods.push(newdata);
    // return setFavoriteFoods(recentData);
  }
  const data = [
    {
      nama: 'soto betawi',
      asal: 'jawa',
    },
    {
      nama: 'soto lamongan',
      asal: 'lamongan',
    },
  ];
  return localStorage.setItem('favorite', JSON.stringify(data));
};

buttonSave.addEventListener('click', () => {
  handleSaveFavorite();
});
