import {
  name,
  email,
  password,
  buttonJoin,
  form,
  buttonLogin,
} from './dom.js';
import { putToLocalStorage, getFromLocalStorage } from './service.js';

// Pendaftaran Akun
const handleRegister = () => {
  if (
    name.value === '' ||
    email.value === '' ||
    password.value === ''
  ) {
    return null;
  }
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
