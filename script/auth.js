import { name, email, password, buttonJoin, form } from './dom.js';

const putToLocalStorage = (data) => {
  localStorage.setItem('userdata', JSON.stringify(data));
};
const getFromLocalStorage = () => {
  return localStorage.getItem('userdata');
};
// Pendaftaran Akun
const handleRegister = () => {
  let state = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  console.log(state);
  putToLocalStorage(state);

  form.reset();
};

buttonJoin.addEventListener('click', () => {
  handleRegister();
});

//Login
const handleLogin = () => {
  let userdata = getFromLocalStorage();
  let user = {
    email: email.value,
    password: password.value,
  };

  console.log(userdata);
};
