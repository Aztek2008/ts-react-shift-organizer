/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import ShiftItem from './ShiftItem';
import { BrowserRouter as Router } from 'react-router-dom';
import Checkbox from 'features/checkbox/Checkbox';

describe('Shift Item', () => {
  it('should render items', () => {
    const shift = {
      shiftId: 2,
      startTime: '02:00',
      endTime: '04:00',
      reservedBy: 'not reserved',
      isChecked: false,
    };

    const onShiftReserve = jest.fn();

    render(
      <Provider store={store}>
        <Router>
          <ShiftItem key={shift.shiftId} shift={shift}>
            <Checkbox onShiftReserve={onShiftReserve} checked={false} />
          </ShiftItem>
        </Router>
      </Provider>
    );

    const listItem = screen.getByRole('listitem');
    const checkBox = screen.getByTestId('input-checkbox');

    expect(listItem).toBeInTheDocument();
    expect(checkBox).toBeInTheDocument();
    expect(screen.getByText(/not reserved/i)).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();

    fireEvent.click(checkBox);
    // fireEvent.change(checkBox, { target: { checked: true } });

    // expect(onShiftReserve).toBeHaveBeenCalled();
    // expect(checkBox).toBeChecked();
  });
});
