import { useAppDispatch } from 'app/hooks';
import Checkbox from 'features/checkbox/Checkbox';
import { IShift } from 'interfaces';
import { handleReserveShift } from './ShiftsListSlice';

import styles from './ShiftItem.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  updateCurrentUserInLocalStorage,
  updateShiftsInLocalstorage,
} from 'helpers/handleLocalStorage';

const ShiftItem = (props: IShift) => {
  const { shiftId, startTime, endTime, reservedBy } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onShiftReserve = (id: number, name: string, isChecked: boolean) => {
    // dispatch(handleReserveShift({ id, name, isChecked }));

    updateShiftsInLocalstorage(shiftId, name, isChecked);

    updateCurrentUserInLocalStorage(
      shiftId,
      name,
      startTime,
      endTime,
      isChecked
    );
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
      />
      <span className={styles.reservedBySpan}>{reservedBy}</span>
      <Link to={`/shifts/${shiftId}`} className={styles.arrow} />
    </div>
  );
};

export default ShiftItem;
