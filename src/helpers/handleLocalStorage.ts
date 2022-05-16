import { IShift } from 'interfaces';

// const interval = setInterval(() => {
//   const myitem = window.localStorage.getItem('allshifts');
//   console.log(`myitem`, myitem);
//   if (myitem) {
//     clearInterval(interval);
//   }
//   // дальнейшие действия с myitem
// }, 1000);

export const updateShiftsInLocalstorage = (
  shiftId: number,
  name: string,
  isChecked: boolean
) => {
  const allShifts = localStorage.getItem('allshifts');

  if (allShifts) {
    const parsedShifts = JSON.parse(allShifts);
    const parsedShiftsWithReserve = parsedShifts.map((shift: IShift) => {
      return shift.shiftId === shiftId
        ? {
            ...shift,
            reservedBy: isChecked ? name : 'not reserved',
            isChecked: isChecked,
          }
        : shift;
    });

    localStorage.setItem('allshifts', JSON.stringify(parsedShiftsWithReserve));
  }
};

export const updateCurrentUserInLocalStorage = (
  shiftId: number,
  name: string,
  startTime: string,
  endTime: string,
  isChecked: boolean
) => {
  const storedUser = localStorage.getItem('currentuser');
  const parsedUser = storedUser && JSON.parse(storedUser);

  if (!isChecked) {
    parsedUser.shifts.push({
      shiftId,
      startTime,
      endTime,
      reservedBy: name,
      isChecked: !isChecked,
    });

    localStorage.setItem('currentuser', JSON.stringify(parsedUser));
  } else {
    parsedUser.shifts = parsedUser.shifts.filter(
      (shift: IShift) => shift.shiftId !== shiftId
    );

    localStorage.setItem('currentuser', JSON.stringify(parsedUser));
  }
};
