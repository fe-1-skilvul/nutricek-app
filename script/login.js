//Login
const handleLogin = () => {
  let userdata = getFromLocalStorage();
  let user = {
    email: email.value,
    password: password.value,
  };

  console.log(userdata);
};
buttonLogin.addEventListener('click', () => {
  handleLogin();
});
