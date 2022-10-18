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

const getPopularFoodsAPI = () => {
  const result = 0;
};
export {
  putToLocalStorage,
  getFromLocalStorage,
  putActiveUser,
  getActiveUser,
};
