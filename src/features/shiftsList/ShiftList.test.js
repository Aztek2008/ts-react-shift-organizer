/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import ShiftsList from 'features/shiftsList/ShiftsList';

describe('Shift List', () => {
  it('should render items', () => {
    render(
      <Provider store={store}>
        <ShiftsList />
      </Provider>
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
});
