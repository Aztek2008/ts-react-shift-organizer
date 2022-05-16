import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IShift } from 'interfaces';

interface ISiftsState {
  shifts: IShift[];
}

const initialState: ISiftsState = {
  shifts: [],
};

export const shiftsSlice = createSlice({
  name: 'shifts',
  initialState,
  reducers: {
    setReduxShifts: (state, action) => {
      state.shifts = action.payload;
    },
    handleReserveShift: (state, action) => {
      state.shifts = state.shifts.map((shift) => {
        return shift.shiftId === action.payload.id
          ? {
              ...shift,
              reservedBy: !action.payload.isChecked
                ? action.payload.name
                : 'not reserved',
              isChecked: !action.payload.isChecked ? true : false,
            }
          : shift;
      });
    },
  },
});

export const { setReduxShifts, handleReserveShift } = shiftsSlice.actions;
export const selectShifts = (state: RootState) => state.shifts;
export default shiftsSlice.reducer;
