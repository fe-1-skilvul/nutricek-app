import { getListFoodsAPI } from './service.js';
import { container, foodId } from './dom.js';

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
  console.log(title);
  function tes() {
    console.log('tes');
  }
  container.innerHTML += `<div class="col d-flex justify-content-center mb-5">
                                <div class="card" style="width: 18rem;">
                                <img src=${image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                <a href="./detail.html?${id}" type="button" id=${id} onclick="tes(${id})" class="btn btn-primary">detail</a>
                                </div>
                                </div>
                            </div>`;
};
getListFoods();
