import { getListFoodsAPI } from './service.js';
import { handleAuthUser, handleLogOut } from './auth.js';
import { container, logout } from './dom.js';

handleAuthUser();
setTimeout(() => {
  const logout = document.getElementById('logout');
  logout.addEventListener('click', () => {
    handleLogOut();
  });
}, [1000]);

const getListFoods = async () => {
  console.log('loading');
  const data = await getListFoodsAPI().finally(() =>
    console.log('loading berhenti')
  );

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
                                    <button  class=" button button-main">detail </button>
                                  </a>
                                </div>
                                </div>
                            </div>`;
};
getListFoods();
