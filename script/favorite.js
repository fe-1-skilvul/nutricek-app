import { handleAuthUser, handleLogOut } from './auth.js';
import { getUserFavorite } from './service.js';
import { container } from './dom.js';

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);
const getListFavoriteFood = () => {
  const favorites = JSON.parse(getUserFavorite());

  if (favorites === null) {
    return (container.innerHTML = ` <div class="col d-flex flex-column justify-content-center mb-5 alert-null">
                                <img src="../images/thum-none-food.png" class="img-thumbnail" width="400" height="400"/>
                                <h4 class="mt-5 class="color-primary"">You Dont Have Any Food</h4>
                                <a href="../home.html">
                                    <button class="mt-5 button button-main text-decoration-none">Foods</button>
                                </a>
                            </div>`);
  }

  return mapListFoods(favorites);
};
const mapListFoods = (foods = []) => {
  foods.map((food, i) => {
    const { id, image, title } = food;
    return writeListFoodsComponent(id, image, title);
  });
};
const writeListFoodsComponent = (id, image, title) => {
  container.innerHTML += `<div class="col d-flex justify-content-center mb-5">
                                  <div class="card" style="width: 18rem;">
                                  <img src=${image} class="card-img-top" alt="...">
                                  <div class="card-body">
                                      <h5 class="card-title">${title}</h5>
                                  <a href="./detail.html?${id}" type="button" id=${id} onclick="tes(${id})">
                                    <button  class=" button button-main">More</button>
                                  </a>
                                  </div>
                                  </div>
                              </div>`;
};
getListFavoriteFood();
