import { FC } from 'react';
import ReactDom from 'react-dom';
import { setShift } from 'firebaseDb/handlers';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { handleReserveShift } from 'features/shiftsList/ShiftsListSlice';
import Checkbox from 'features/checkbox/Checkbox';
import { toggleModal } from './ModalSlice';
import Clock from 'features/clock/Clock';

import styles from './Modal.module.css';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, shiftId } = useAppSelector((state) => state.modal);
  const shifts = useAppSelector((state) => state.shifts.shifts);
  const shift = shifts[0];

  if (!isOpen) {
    return null;
  }

  const onShiftReserve = (id: number, name: string, isChecked: boolean) => {
    if (shift.reservedBy === name || shift.reservedBy === 'not reserved') {
      dispatch(handleReserveShift({ id, name, isChecked }));
      setShift(shiftId, !isChecked, name);
    }
  };

  return ReactDom.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button
          onClick={() => dispatch(toggleModal())}
          className={styles.closeBtn}
        ></button>
        <div className={styles.shiftInfo}>
          <span className={styles.infoSpanCont}>
            <span className={styles.innerSpan}>Time range: </span>
            <span className={styles.innerSpan}>{shift.startTime}</span>
            <span className={styles.innerSpan}>-</span>
            <span className={styles.innerSpan}>{shift.endTime}</span>
          </span>
          <span className={styles.infoSpanCont}>
            <span className={styles.innerSpan}>Reserved by: </span>
            <span className={styles.innerSpan}>{shift.reservedBy}</span>
          </span>
          <span className={styles.infoSpanCont}>
            <span className={styles.innerSpan}>
              {shift.isChecked ? 'Refuse this shift' : 'Reserve this shift'}
            </span>
            <div className={styles.innerSpan}>
              <Checkbox
                onShiftReserve={onShiftReserve}
                shiftId={shiftId}
                reservedBy={shift.reservedBy}
                checked={shift.isChecked}
              />
            </div>
          </span>
        </div>
        <Clock shiftIds={[shiftId - 1]} skewDeg={60} />
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
