import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { setCurrentUser } from 'features/userInfo/usersSlice';
import { allShiftsRef, setShifts } from 'firebaseDb/handlers';
import { onValue } from 'firebase/database';
import { setReduxShifts } from 'features/shiftsList/ShiftsListSlice';

import Modal from 'features/modal/Modal';
import Layout from 'features/layout/Layout';
import MainPage from 'pages/MainPage';
import AccountPage from 'pages/AccountPage';

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
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        <Layout>
          <Modal />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/account' element={<AccountPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
