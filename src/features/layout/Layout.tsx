import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { ILayoutProps } from 'interfaces';
import LoginFormIK from 'features/loginForm/LoginFormIK';
// import LoginForm from 'features/loginForm/LoginForm';
import LoggedUserUI from 'ui/LoggedUserUI';

import styles from './Layout.module.css';

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
      {userName ? <LoggedUserUI /> : <LoginFormIK />}
      {/* {userName ? <LoggedUserUI /> : <LoginForm />} */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
