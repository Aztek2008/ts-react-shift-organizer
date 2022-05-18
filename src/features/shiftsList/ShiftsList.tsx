import { getShifts } from 'firebaseDb/config';
import { IShift } from 'interfaces';
import { useEffect, useState } from 'react';
import ShiftItem from './ShiftItem';

import styles from './ShiftsList.module.css';

const ShiftsList = () => {
  const [shifts, setShifts] = useState<IShift[]>();

  useEffect(() => {
    getShifts(setShifts);
  }, []);

  // const jsonShifts = JSON.stringify(shiftsStore);
  // // const [shifts, setShifts] = useState<IShift[]>([]);
  // const [allShifts, setAllShifts] = useState([]);

  // useEffect(() => {
  // const allShifts = localStorage.getItem('allshifts');

  // if (!allShifts) {
  //   localStorage.setItem('allshifts', jsonShifts);
  // }

  // if (allShifts) {
  //   const parsedShifts = JSON.parse(allShifts);
  //   setAllShifts(parsedShifts);
  // dispatch(setReduxShifts(parsedShifts));
  // }
  // }, []);

  return (
    <div className={styles.shiftsContainer}>
      {shifts?.map((shift) => (
        <ShiftItem key={shift.shiftId} shift={shift} setShifts={setShifts} />
      ))}
    </div>
  );
};

export default ShiftsList;
