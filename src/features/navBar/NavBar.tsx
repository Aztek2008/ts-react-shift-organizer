import { useAppDispatch } from 'app/hooks';
import { logOutUser } from 'features/userInfo/usersSlice';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.navLink} to='/account'>
        Account
      </NavLink>
      <NavLink className={styles.navLink} to='/' onClick={logOut}>
        Log out
      </NavLink>
      <NavLink className={styles.navLink} to='/'>
        All Shifts
      </NavLink>
    </nav>
  );
};

export default NavBar;
