import { FC } from 'react';
import styles from './Clock.module.css';
import ClockSector from './ClockSector';

interface IProp {
  shiftIds: number[];
}

const Clock: FC<IProp> = ({ shiftIds }) => {
  const rotateDegArray = [
    75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375, 405,
  ];

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clockFaceWrapper}>
        {rotateDegArray.map((deg, idx) => (
          <ClockSector
            shiftIds={shiftIds}
            id={(idx + 1).toString()}
            rotateDeg={deg}
          />
        ))}
      </div>
    </div>
  );
};

export default Clock;
