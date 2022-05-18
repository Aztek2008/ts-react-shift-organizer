import ShiftItem from 'features/shiftsList/ShiftItem';
import { IShift } from 'interfaces';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from 'features/shiftsList/ShiftItem.module.css';
import { getShift } from 'firebaseDb/config';

const ShiftPage = () => {
  const [shifts, setShifts] = useState<IShift[]>([]);
  const [shift, setShift] = useState<IShift>();
  // const storedShifts = localStorage.getItem('allshifts');
  const location = useLocation();
  const pathId = parseInt(location.pathname.split('/').slice(1)[1]);

  useEffect(() => {
    getShift(setShift, pathId);
  }, []);

  // useEffect(() => {
  //   if (storedShifts) {
  //     const parsedShifts = JSON.parse(storedShifts);
  //     setShifts(parsedShifts);
  //   }
  // }, [storedShifts]);

  // useEffect(() => {
  //   const shiftItem = shifts.find((item) => item.shiftId === pathId);

  //   shiftItem && setShift(shiftItem);
  // }, [shifts]);

  return (
    <div>
      {shift && (
        <ShiftItem key={shift.shiftId} shift={shift} setShifts={setShifts} />
      )}
      <div className={styles.shiftContainer}>
        Here will be notifications settings
      </div>
    </div>
  );
};

export default ShiftPage;
