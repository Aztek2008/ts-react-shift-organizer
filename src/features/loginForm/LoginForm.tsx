import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addUser, setCurrentUser } from 'features/userInfo/usersSlice';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

import styles from './LoginForm.module.css';

const LoginInput: FC = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const dispatch = useAppDispatch();
  const { users, user } = useAppSelector((state) => state.users);

  const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserEmail(event.target.value);
  };

  const onPassChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserPass(event.target.value);
  };

  const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName || !userEmail || !userPass) {
      return console.log('Please fill all user login info');
    }

    if (userEmail === user.userEmail) {
      return dispatch(setCurrentUser(user));
    }

    if (users.find((user) => user.userEmail === userEmail)) {
      console.log(
        'User exists: ',
        users.find((user) => user.userEmail === userEmail)
      );
    }

    const newUser = {
      userId: Date.now(),
      userName,
      userRole: 'user',
      userEmail,
      userPass,
      shifts: [],
    };

    localStorage.setItem('currentuser', JSON.stringify(newUser));

    dispatch(addUser(newUser));
    dispatch(setCurrentUser(newUser));
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={onLoginSubmit}>
        <input
          onChange={onUserNameChange}
          autoComplete='User Name'
          placeholder='User Name'
          className={styles.input}
          type='text'
          name='userName'
          value={userName}
        />
        <input
          onChange={onEmailChange}
          placeholder='User email'
          className={styles.input}
          type='email'
          name='useEmail'
          value={userEmail}
        />
        <input
          onChange={onPassChange}
          placeholder='User password'
          className={styles.input}
          type='password'
          name='password'
          value={userPass}
        />
        <button className={styles.button} type='submit'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginInput;
