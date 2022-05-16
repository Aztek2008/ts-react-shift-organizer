import { useAppDispatch, useAppSelector } from 'app/hooks';
import { IShift } from 'interfaces';
import { useEffect, useState } from 'react';
import shiftsStore from 'shifts.db.json';
import ShiftItem from './ShiftItem';

import styles from './ShiftsList.module.css';
import { setReduxShifts } from './ShiftsListSlice';

const ShiftsList = () => {
  const dispatch = useAppDispatch();
  const shifts1 = useAppSelector((state) => state.shifts.shifts);
  const jsonShifts = JSON.stringify(shiftsStore);
  const [shifts, setShifts] = useState<IShift[]>([]);
  const [allShifts, setAllShifts] = useState([]);

  useEffect(() => {
    const allShifts = localStorage.getItem('allshifts');

    if (!allShifts) {
      localStorage.setItem('allshifts', jsonShifts);
    }

    if (allShifts) {
      const parsedShifts = JSON.parse(allShifts);
      setAllShifts(parsedShifts);
      // dispatch(setReduxShifts(parsedShifts));
    }
  }, []);

  useEffect(() => {
    setShifts(allShifts);
  }, [allShifts]);

  return (
    <div className={styles.shiftsContainer}>
      {shifts?.map((shift) => (
        <ShiftItem key={shift.shiftId} {...shift} />
      ))}
    </div>
  );
};

export default ShiftsList;
