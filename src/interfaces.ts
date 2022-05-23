import { ReactElement } from 'react';

export interface ILayoutProps {
  children: ReactElement[] | ReactElement;
}

export interface IModalProps {
  // open: boolean;
  shift: ReactElement[] | ReactElement;
}

export interface IUser {
  userId: number;
  userName: string;
  userRole: string;
  userEmail: string;
  userPass: string;
  shifts: IShift[];
}

export interface IShift {
  shiftId: number;
  startTime: string;
  endTime: string;
  reservedBy: string;
  isChecked: boolean;
}
