import { FC, useEffect, useState } from 'react';
import { ILayoutProps } from 'interfaces';
import { useAppSelector } from 'app/hooks';
import UserLogo from 'features/userLogo/UserLogo';
import LoginForm from 'features/loginForm/LoginForm';
import NavBar from 'features/navBar/NavBar';

import styles from './Layout.module.css';
import { useLocation } from 'react-router-dom';

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { userName } = useAppSelector((state) => state.users.user);
  const location = useLocation();
  const [title, setTitle] = useState('/');

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('All shifts');
    } else if (location.pathname === '/account') {
      setTitle('Account');
    } else {
      setTitle('Shift details');
    }
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>{title}</header>
      {userName ? <UserLogo /> : <LoginForm />}
      {userName && <NavBar />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
