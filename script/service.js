const putToLocalStorage = (data) => {
  localStorage.setItem('userdata', JSON.stringify(data));
};
const getFromLocalStorage = () => {
  return localStorage.getItem('userdata');
};

export { putToLocalStorage, getFromLocalStorage };
