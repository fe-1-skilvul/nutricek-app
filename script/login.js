import { email, password, buttonLogin } from './dom.js';
import { getFromLocalStorage } from './service.js';

//Login
const handleLogin = () => {
  let userdata = getFromLocalStorage();
  if (email.value === '' || password.value === '') {
    return console.log('isi data dengan benar');
  }
  let user = {
    email: email.value,
    password: password.value,
  };
  if (
    user.email === userdata.email &&
    user.password === userdata.password
  ) {
    return console.log('Login Success');
  }
  return console.log('login gagal');
};
buttonLogin.addEventListener('click', () => {
  handleLogin();
});
