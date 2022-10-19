import { handleAuthUser } from './auth.js';
import {
  getPopularFoodsAPI,
  getListFoodsAPI,
  getFoodDetailByID,
  getFoodBySearch,
  getFoodInformation,
} from './service.js';

handleAuthUser();
getListFoodsAPI();
getFoodDetailByID();
getFoodBySearch();
getFoodInformation();
