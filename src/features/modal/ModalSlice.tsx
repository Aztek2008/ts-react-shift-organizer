import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, shiftId: 0, dayTime: 'AM' },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setShiftId: (state, action) => {
      state.shiftId = action.payload;
    },
    setDayTime: (state, action) => {
      state.dayTime = action.payload;
    },
  },
});

export const { toggleModal, setShiftId, setDayTime } = modalSlice.actions;
export const selectModalState = (state: RootState) => state.modal;
export default modalSlice.reducer;
