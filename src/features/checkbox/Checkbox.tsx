import { useAppSelector } from 'app/hooks';
import { FC, useState } from 'react';

import styles from './Checkbox.module.css';

interface ICheckProps {
  reservedBy: string;
  shiftId: number;
  onShiftReserve: (arg0: number, arg1: string, arg2: boolean) => void;
  checked: boolean;
}

const Checkbox: FC<ICheckProps> = ({ onShiftReserve, shiftId, checked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const currentUserName = useAppSelector((state) => state.users.user.userName);

  const handleChange = () => {
    if (!currentUserName) return;
    setIsChecked(!isChecked);

    onShiftReserve(shiftId, currentUserName, isChecked);
  };

  return (
    <label className={styles.label}>
      <input
        data-testid='input-checkbox'
        type='checkbox'
        onChange={handleChange}
        checked={checked}
      />
      <svg
        className={`${styles.checkbox} ${checked ? styles.checkboxActive : ''}`}
        aria-hidden='true'
        viewBox='0 0 15 11'
        fill='none'
      >
        <path
          d='M1 4.5L5 9L14 1'
          strokeWidth='2'
          stroke={checked ? '#fff' : 'none'}
        />
      </svg>
    </label>
  );
};

export default Checkbox;
