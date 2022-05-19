import { useAppSelector } from 'app/hooks';
import ShiftItem from 'features/shiftsList/ShiftItem';

import styles from './UserInfo.module.css';

const UserInfo = () => {
  const { shifts } = useAppSelector((state) => state.shifts);
  const { userName } = useAppSelector((state) => state.users.user);
  const userShifts = shifts.filter((shift) => shift.reservedBy === userName);
  const workingDay = 8;

  return (
    <div>
      <article>
        {userShifts.length ? (
          <span className={styles.title}>Your shifts:</span>
        ) : (
          <span className={styles.title}>You have no reserved shifts</span>
        )}
        <span>
          {userShifts?.map((shift) => (
            <ShiftItem key={shift.shiftId} shift={shift} />
          ))}
        </span>
      </article>
      {userShifts?.length ? (
        <article className={styles.coveredHours}>
          <span className={styles.title}>Total time covered:</span>
          <span>
            {userShifts.length * 2} hours from {workingDay} hours
          </span>
        </article>
      ) : null}
    </div>
  );
};

export default UserInfo;
