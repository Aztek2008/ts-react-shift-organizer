import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { setCurrentUser } from 'features/userInfo/usersSlice';
import Layout from 'features/layout/Layout';
import { allShiftsRef, setShifts } from 'firebaseDb/config';
import { useAppDispatch } from 'app/hooks';
import defaultShifts from 'shifts.db.json';

import MainPage from 'pages/MainPage';
import AccountPage from 'pages/AccountPage';
import ShiftPage from 'pages/ShiftPage';
// import { emptyUser } from 'features/userInfo/usersSlice';

import './App.css';
import { setReduxShifts } from 'features/shiftsList/ShiftsListSlice';
import { onValue } from 'firebase/database';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShifts();

    onValue(allShiftsRef, (DataSnapshot) => {
      const data = DataSnapshot.val();
      dispatch(setReduxShifts(data));
    });

    const currentUser = localStorage.getItem('currentuser');
    // const defaultEmptyUser = JSON.stringify(emptyUser);
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      dispatch(setCurrentUser(parsedUser));
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/shifts/:id' element={<ShiftPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
