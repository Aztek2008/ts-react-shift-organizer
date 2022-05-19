import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { setCurrentUser } from 'features/userInfo/usersSlice';
import { allShiftsRef, setShifts } from 'firebaseDb/handlers';
import { onValue } from 'firebase/database';
import Layout from 'features/layout/Layout';
import { setReduxShifts } from 'features/shiftsList/ShiftsListSlice';

import MainPage from 'pages/MainPage';
import AccountPage from 'pages/AccountPage';
import ShiftPage from 'pages/ShiftPage';

import './App.css';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setShifts();

    onValue(allShiftsRef, (DataSnapshot) => {
      const data = DataSnapshot.val();
      dispatch(setReduxShifts(data));
    });

    const currentUser = localStorage.getItem('currentuser');
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
