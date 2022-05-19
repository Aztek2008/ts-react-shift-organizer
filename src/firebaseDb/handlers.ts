import shiftsStore from 'shifts.db.json';
import { onValue, ref, set } from 'firebase/database';
import { db } from './config';

export const allShiftsRef = ref(db, 'shifts/');

export const setShifts = () => {
  onValue(allShiftsRef, (DataSnapshot) => {
    const data = DataSnapshot.val();

    if (!data.length) {
      set(allShiftsRef, shiftsStore);
    }
  });
};

export const setShift = (
  shiftId: number,
  checked: boolean,
  userName: string
) => {
  const shiftRef = ref(db, 'shifts/' + (shiftId - 1));

  onValue(
    shiftRef,
    (DataSnapshot) => {
      const data = DataSnapshot.val();

      set(shiftRef, {
        ...data,
        reservedBy: checked ? userName : 'not reserved',
        isChecked: checked,
      });
    },
    { onlyOnce: true }
  );
};

export const getShifts = (setState: any) => {
  const listOfShiftsFromFb = ref(db, 'shifts/');

  onValue(
    listOfShiftsFromFb,
    (DataSnapshot) => {
      const data = DataSnapshot.val();
      setState(data);
    },
    { onlyOnce: true }
  );
};

export const getShift = (setState: any, shiftId: number) => {
  const shiftsFromFb = ref(db, `shifts/${shiftId - 1}`);

  onValue(
    shiftsFromFb,
    (DataSnapshot) => {
      const data = DataSnapshot.val();
      setState(data);
    },
    { onlyOnce: true }
  );
};
