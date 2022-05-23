import { FC, useEffect, useState } from 'react';
import { toggleModal } from './ModalSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { IShift } from 'interfaces';
import Clock from 'features/clock/Clock';

import styles from './Modal.module.css';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, shiftId } = useAppSelector((state) => state.modal);
  const shifts = useAppSelector((state) => state.shifts.shifts);
  const [shift, setShift] = useState<IShift>();
  // const { startTime, endTime, reservedBy } = shifts[shiftId - 1];

  useEffect(() => {
    setShift(shifts[shiftId - 1]);
  }, [shifts, shiftId]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <button
          onClick={() => dispatch(toggleModal())}
          className={styles.closeBtn}
        ></button>
        <div className={styles.shiftInfo}>
          <span className={styles.infoSpanCont}>
            <span className={styles.innerSpan}>Time range: </span>
            <span className={styles.innerSpan}>{shift?.startTime}</span>
            <span className={styles.innerSpan}>-</span>
            <span className={styles.innerSpan}>{shift?.endTime}</span>
          </span>
          <span className={styles.infoSpanCont}>
            <span className={styles.innerSpan}>Reserved by: </span>
            <span className={styles.innerSpan}>{shift?.reservedBy}</span>
          </span>
        </div>
        <Clock shiftIds={[shiftId]} />
      </div>
    </div>
  );
};

export default Modal;
