import { getListFoodsAPI, getFoodBySearch } from './service.js';
import { handleAuthUser, handleLogOut } from './auth.js';
import { container, buttonSearch, query } from './dom.js';

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);

const getListFoods = async () => {
  const data = await getListFoodsAPI();

  mapListFoods(data);
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
getListFoods(50);
const handleSearch = async (value) => {
  const data = await getFoodBySearch(value);
  if (data.length === 0) {
    container.innerHTML = `<div class="col d-flex flex-column justify-content-center mb-5 alert-null">
                              <h4 class="mt-5 class="color-primary"">Food Not Found</h4>
                          </div>`;
  }
  mapListFoods(data);
};
buttonSearch.addEventListener('click', () => {
  const value = query.value;
  container.innerHTML = ' ';
  handleSearch(value);
});
