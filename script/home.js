import { getListFoodsAPI } from './service.js';
import { container } from './dom.js';

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

  container.innerHTML += `<div class="col d-flex justify-content-center">
                                <div class="card" style="width: 18rem;">
                                <img src=${image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <div class="d-flex">
                                    <p class="card-text me-3">22 kkal</p>
                                    <p class="card-text">0.2kg/CO²</p>
                                    </div>
                                <a href="./detail.html" class="btn btn-primary">detail</a>
                                </div>
                                </div>
                            </div>`;
};
// getListFoods();
