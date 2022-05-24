import { useAppDispatch } from 'app/hooks';
import { setDayTime } from 'features/modal/ModalSlice';
import { FC, useEffect, useState } from 'react';

import styles from './Clock.module.css';

interface IProp {
  id: string;
  rotateDeg: number;
  shiftIds: number[];
}

const ClockSector: FC<IProp> = ({ shiftIds, id, rotateDeg }) => {
  const sectorIdAm = shiftIds.includes(Number(id));
  const sectorIdPm = shiftIds.includes(Number(id) + 6);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shiftIds[0] <= 6) {
      dispatch(setDayTime('AM'));
    } else if (shiftIds[0] > 6) {
      dispatch(setDayTime('PM'));
    }
  }, [shiftIds, dispatch]);

  return (
    <div
      id={id}
      className={
        !(sectorIdAm || sectorIdPm)
          ? styles.sector
          : `${styles.sector} ${styles.filledSector}`
      }
      style={{ transform: `rotate(${rotateDeg}deg) skew(30deg)` }}
    ></div>
  );
};

export default ClockSector;
