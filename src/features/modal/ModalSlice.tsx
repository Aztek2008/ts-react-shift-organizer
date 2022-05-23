import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, shiftId: 0 },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setShiftId: (state, action) => {
      state.shiftId = action.payload;
    },
  },
});

export const { toggleModal, setShiftId } = modalSlice.actions;
export const selectModalState = (state: RootState) => state.modal;
export default modalSlice.reducer;
