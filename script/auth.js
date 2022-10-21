import { getActiveUser } from './service.js';
const handleAuthUser = async () => {
  const isLogin = await getActiveUser();
  // writeUserName(isLogin.name);
  if (isLogin === null) {
    return window.location.replace('/login.html');
  }

  setTimeout(() => {
    writeUserName(isLogin.name);
  }, [1000]);
};

const handleLogOut = () => {
  localStorage.removeItem('activeUser');
};

const writeUserName = (name = 'Anon') => {
  const divname = document.getElementById('username');

  divname.innerHTML = `<p class="h5 ms-2 me-lg-5">${name}</p>`;
};
export { handleAuthUser, handleLogOut };
