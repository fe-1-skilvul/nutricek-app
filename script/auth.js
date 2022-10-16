import { getActiveUser } from './service';

export const handleAuthUser = () => {
  const isLogin = getActiveUser();

  if (isLogin === null) {
    console.log('user belum login');
  }
};
