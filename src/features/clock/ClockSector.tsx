import { FC } from 'react';

import styles from './Clock.module.css';

interface IProp {
  id: string;
  rotateDeg: number;
  shiftIds: number[];
}

const ClockSector: FC<IProp> = ({ shiftIds, id, rotateDeg }) => {
  const sectorId = shiftIds.includes(Number(id));
  console.log('sectorId', sectorId);

  return (
    <div
      id={id}
      className={
        !sectorId ? styles.sector : `${styles.sector} ${styles.filledSector}`
      }
      style={{ transform: `rotate(${rotateDeg}deg) skew(60deg)` }}
    ></div>
  );
};

export default ClockSector;
