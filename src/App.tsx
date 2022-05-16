import Layout from 'features/layout/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import MainPage from 'pages/MainPage';
import AccountPage from 'pages/AccountPage';
import ShiftPage from 'pages/ShiftPage';
import { useAppDispatch } from 'app/hooks';
import { useEffect } from 'react';
import { setCurrentUser } from 'features/userInfo/usersSlice';
import { emptyUser } from 'features/userInfo/usersSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentuser');
    const defaultEmptyUser = JSON.stringify(emptyUser);

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
