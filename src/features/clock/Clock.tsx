import { useAppSelector } from 'app/hooks';
import { FC } from 'react';
import styles from './Clock.module.css';
import ClockSector from './ClockSector';

interface IProp {
  shiftIds: number[];
}

const Clock: FC<IProp> = ({ shiftIds }) => {
  const { dayTime } = useAppSelector((state) => state.modal);
  const rotateDegArray = [105, 165, 225, 285, 345, 405];

  return (
    <div className={styles.clockContainer}>
      <div className={styles.centerCircle}></div>
      <span className={styles.dateTime}>{dayTime === 'AM' ? 'AM' : 'PM'}</span>
      <div className={styles.clockFaceUnderWrapper}>
        <div className={styles.clockFaceWrapper}>
          {rotateDegArray.map((deg, idx) => (
            <ClockSector
              key={idx}
              shiftIds={shiftIds}
              id={(idx + 1).toString()}
              rotateDeg={deg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clock;
