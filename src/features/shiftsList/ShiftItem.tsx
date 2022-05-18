import { useAppDispatch } from 'app/hooks';
import Checkbox from 'features/checkbox/Checkbox';
import { IShift } from 'interfaces';
import { handleReserveShift } from './ShiftsListSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getShifts, setShift } from 'firebaseDb/config';

import styles from './ShiftItem.module.css';

const ShiftItem = (props: { key: number; shift: IShift; setShifts?: any }) => {
  const { shiftId, startTime, endTime, reservedBy, isChecked } = props.shift;
  const dispatch = useAppDispatch();

  const onShiftReserve = (id: number, name: string, isChecked: boolean) => {
    if (reservedBy === name || reservedBy === 'not reserved') {
      dispatch(handleReserveShift({ id, name, isChecked }));
      setShift(shiftId, !isChecked, name);
      getShifts(props.setShifts);
    }
  };

  return (
    <div className={styles.shiftContainer}>
      <span className={styles.timeSpanCont}>
        <span className={styles.timeSpan}>{startTime}</span>
        <span className={styles.betweenTime}>-</span>
        <span className={styles.timeSpan}>{endTime}</span>
      </span>
      <Checkbox
        onShiftReserve={onShiftReserve}
        shiftId={shiftId}
        reservedBy={reservedBy}
        checked={isChecked}
      />
      <span className={styles.reservedBySpan}>{reservedBy}</span>
      <Link to={`/shifts/${shiftId}`} className={styles.arrow} />
    </div>
  );
};

export default ShiftItem;
