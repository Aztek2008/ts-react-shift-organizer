import { useAppDispatch } from 'app/hooks';
import { setDayTime } from 'features/modal/ModalSlice';
import { FC, useEffect } from 'react';

import styles from './Clock.module.css';

interface IProp {
  shiftId: number;
  shiftIds: number[];
  id: string;
  rotateDeg: number;
  skewDeg: number;
}

const ClockSector: FC<IProp> = ({
  shiftId,
  shiftIds,
  id,
  rotateDeg,
  skewDeg,
}) => {
  // const dispatch = useAppDispatch();

  // console.log('id in sector', id);

  // useEffect(() => {
  //   if (shiftId) {
  //     if (shiftId <= 6) {
  //       dispatch(setDayTime('AM'));
  //     } else if (shiftId > 6) {
  //       dispatch(setDayTime('PM'));
  //     }
  //   }
  // }, [shiftId, dispatch]);

  return (
    <div
      id={id}
      className={
        !(
          shiftIds.includes(Number(id))
          // || shiftIds.includes(Number(id) + 6)
        )
          ? styles.sector
          : `${styles.sector} ${styles.filledSector}`
      }
      style={{ transform: `rotate(${rotateDeg}deg) skew(${skewDeg}deg)` }}
    >
      <span className={styles.timeNum}>{Number(id) * 2}</span>
    </div>
  );
};

export default ClockSector;
