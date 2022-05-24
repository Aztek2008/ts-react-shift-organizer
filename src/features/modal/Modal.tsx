import { FC, useEffect, useState } from 'react';
import { toggleModal } from './ModalSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { IShift } from 'interfaces';
import Clock from 'features/clock/Clock';

import styles from './Modal.module.css';
import Checkbox from 'features/checkbox/Checkbox';
import { handleReserveShift } from 'features/shiftsList/ShiftsListSlice';
import { setShift } from 'firebaseDb/handlers';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, shiftId } = useAppSelector((state) => state.modal);
  const shifts = useAppSelector((state) => state.shifts.shifts);
  const [shift, setModalShift] = useState<IShift>();
  // const { startTime, endTime, reservedBy } = shifts[shiftId - 1];

  useEffect(() => {
    setModalShift(shifts[shiftId - 1]);
  }, [shifts, shiftId]);

  if (!isOpen) {
    return null;
  }

  const onShiftReserve = (id: number, name: string, isChecked: boolean) => {
    if (shift?.reservedBy === name || shift?.reservedBy === 'not reserved') {
      dispatch(handleReserveShift({ id, name, isChecked }));
      setShift(shiftId, !isChecked, name);
    }
  };

  return (
    <div className={styles.modalContainer}>
      {shift && (
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
          <Clock shiftIds={[shiftId]} />
        </div>
      )}
    </div>
  );
};

export default Modal;
