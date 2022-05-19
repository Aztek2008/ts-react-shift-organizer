import { useAppDispatch } from 'app/hooks';
import { logOutUser } from 'features/userInfo/usersSlice';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './NavBar.module.css';

const inactiveStyle = {
  backgroundColor: 'transparent',
  padding: 10,
  border: '1px solid #eeeded',
  height: 35,
  flex: 1,
  fontFamily: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
};

const activeStyle = {
  backgroundColor: 'transparent',
  padding: 10,
  borderTop: '1px solid #eeeded',
  borderLeft: '1px solid #eeeded',
  borderRight: '1px solid #eeeded',
  height: 35,
  flex: 1,
  fontFamily: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  borderBottom: 'none',
};

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logOutUser());
    navigate('/');
  };

  return (
    <nav className={styles.navBar}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to='/account'
      >
        Account
      </NavLink>
      <NavLink className={styles.navLink} to='/' onClick={logOut}>
        Log out
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        to='/'
      >
        All Shifts
      </NavLink>
    </nav>
  );
};

export default NavBar;
