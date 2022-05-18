import { IShift } from 'interfaces';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import shiftsStore from 'shifts.db.json';
import { useAppDispatch } from 'app/hooks';

export const firebaseConfig = {
  apiKey: 'AIzaSyCNBZCBqZ6i3nnr2XZYIBJi8kULTEsWR2k',
  authDomain: 'ts-react-shift-organizer.firebaseapp.com',
  databaseURL:
    'https://ts-react-shift-organizer-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ts-react-shift-organizer',
  storageBucket: 'ts-react-shift-organizer.appspot.com',
  messagingSenderId: '190940113796',
  appId: '1:190940113796:web:1f102556066015e3fd4bd1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
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
  // const data: IShift[] = [];
  console.log('getting shifts...');

  // onValue(
  //   listOfShiftsFromFb,
  //   (DataSnapshot) => {
  //     DataSnapshot.forEach((childSnapshot) => {
  //       const childData = childSnapshot.val();
  //       data.push(childData);
  //     });
  //   },
  //   { onlyOnce: true }
  // );

  onValue(
    listOfShiftsFromFb,
    (DataSnapshot) => {
      const data = DataSnapshot.val();
      setState(data);
    },
    { onlyOnce: true }
  );

  // console.log('data', data);
  // setState(data);
};

export const getShift = (setState: any, shiftId: number) => {
  const shiftsFromFb = ref(db, `shifts/${shiftId - 1}`);
  // let data: IShift;
  console.log('getting shift...');

  onValue(
    shiftsFromFb,
    (DataSnapshot) => {
      const data = DataSnapshot.val();
      setState(data);
    },
    { onlyOnce: true }
  );
};
