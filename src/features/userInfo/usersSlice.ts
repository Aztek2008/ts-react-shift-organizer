import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IUser } from 'interfaces';

interface IUsersState {
  users: IUser[];
  user: IUser;
}

export const emptyUser = {
  userId: 0,
  userName: '',
  userRole: '',
  userEmail: '',
  userPass: '',
  shifts: [],
};

const initialState: IUsersState = {
  users: [],
  user: emptyUser,
};

export const usersSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = emptyUser;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user: IUser) => user.userId !== action.payload
      );
      state.user = emptyUser;
      localStorage.removeItem('currentuser');
    },
    checkExistedUser: (state, actiom) => {},
  },
});

export const {
  addUser,
  setCurrentUser,
  logOutUser,
  deleteUser,
  checkExistedUser,
} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
