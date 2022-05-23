import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from 'features/userInfo/usersSlice';
import shiftsReducer from 'features/shiftsList/ShiftsListSlice';
import modalReducer from 'features/modal/ModalSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    shifts: shiftsReducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
