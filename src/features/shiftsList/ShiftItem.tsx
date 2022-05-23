import { IShift } from 'interfaces';
// import { Link } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import Checkbox from 'features/checkbox/Checkbox';
import { handleReserveShift } from './ShiftsListSlice';
import { setShift } from 'firebaseDb/handlers';

import styles from './ShiftItem.module.css';
import { setShiftId, toggleModal } from 'features/modal/ModalSlice';

const ShiftItem = (props: { key?: number; shift: IShift }) => {
  const { shiftId, startTime, endTime, reservedBy, isChecked } = props.shift;
  const dispatch = useAppDispatch();

  const onShiftReserve = (id: number, name: string, isChecked: boolean) => {
    if (reservedBy === name || reservedBy === 'not reserved') {
      dispatch(handleReserveShift({ id, name, isChecked }));
      setShift(shiftId, !isChecked, name);
    }
  };

  const openModal = (id: number) => {
    console.log('id', id);
    dispatch(toggleModal());
    dispatch(setShiftId(id));
  };

  return (
    <li className={styles.shiftContainer}>
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
      {/* <Link to={`/shifts/${shiftId}`} className={styles.arrow} /> */}
      <div onClick={() => openModal(shiftId)} className={styles.arrow}></div>
    </li>
  );
};

export default ShiftItem;
