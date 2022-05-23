import { useAppSelector } from 'app/hooks';
import ShiftItem from './ShiftItem';

import styles from './ShiftsList.module.css';

const ShiftsList = () => {
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
