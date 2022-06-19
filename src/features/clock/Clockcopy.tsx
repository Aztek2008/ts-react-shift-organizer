import { FC } from 'react';
import ClockSector from './ClockSector';

import styles from './Clockcopy.module.css';

interface IProp {
  shiftIds: number[];
  skewDeg: number;
}

const Clockcopy: FC<IProp> = ({ shiftIds, skewDeg }) => {
  const rotateDegArray = [
    75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375, 405,
  ];

  return (
    <div className={styles.clockContainer}>
      <div className={styles.centerCircle}></div>
      <div className={styles.clockFaceUnderWrapper}>
        <div className={styles.clockFaceWrapper}>
          {shiftIds.length &&
            rotateDegArray.map((deg, idx) => (
              <ClockSector
                key={idx}
                shiftId={shiftIds[idx]}
                shiftIds={shiftIds}
                id={idx.toString()}
                rotateDeg={deg}
                skewDeg={skewDeg}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Clockcopy;
