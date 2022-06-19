// import { useAppSelector } from 'app/hooks';
import { FC } from 'react';
import styles from './Clock.module.css';
import ClockSector from './ClockSector';

interface IProp {
  shiftIds: number[];
  skewDeg: number;
}

const Clock: FC<IProp> = ({ shiftIds, skewDeg }) => {
  // const { dayTime } = useAppSelector((state) => state.modal);
  // const rotateDegArray6 = [105, 165, 225, 285, 345, 405];
  const rotateDegArray = [
    75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375, 405,
  ];

  // let rotateDegArray =
  //   shiftIds.length === 1 ? rotateDegArray6 : rotateDegArray12;

  return (
    <div className={styles.clockContainer}>
      <div className={styles.centerCircle}></div>
      {/* {shiftIds.length === 1 && (
        <span className={styles.dateTime}>
          {dayTime === 'AM' ? 'AM' : 'PM'}
        </span>
      )} */}
      <div
        className={`${styles.clockFaceUnderWrapper} ${styles.clockRotate12}`}
      >
        <div className={styles.clockFaceWrapper}>
          {rotateDegArray.map((deg, idx) => (
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

export default Clock;
