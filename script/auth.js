import { getActiveUser } from './service.js';
const handleAuthUser = () => {
  const isLogin = getActiveUser();

  if (isLogin === null) {
    return console.log('user belum login');
  }

  return console.log('login success', isLogin);
};

export { handleAuthUser };
