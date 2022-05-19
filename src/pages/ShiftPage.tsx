import ShiftItem from 'features/shiftsList/ShiftItem';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

import styles from 'features/shiftsList/ShiftItem.module.css';

const ShiftPage = () => {
  const { shifts } = useAppSelector((state) => state.shifts);
  const location = useLocation();
  const pathId = parseInt(location.pathname.split('/').slice(1)[1]);
  const shift = shifts[pathId - 1];

  return (
    <div>
      {shift && <ShiftItem key={shift.shiftId} shift={shift} />}
      <div className={styles.shiftContainer}>
        Here will be notifications settings
      </div>
    </div>
  );
};

export default ShiftPage;
