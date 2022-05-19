import { useAppSelector } from 'app/hooks';
import { getShifts } from 'firebaseDb/handlers';
import { IShift } from 'interfaces';
import { useEffect, useState } from 'react';
import ShiftItem from './ShiftItem';

import styles from './ShiftsList.module.css';

const ShiftsList = () => {
  // const [shifts, setShifts] = useState<IShift[]>();

  // useEffect(() => {
  //   getShifts(setShifts);
  // }, []);
  const { shifts } = useAppSelector((state) => state.shifts);

  return (
    <ul className={styles.shiftsContainer}>
      {shifts?.map((shift) => (
        <ShiftItem key={shift.shiftId} shift={shift} />
      ))}
    </ul>
  );
};

export default ShiftsList;
