/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import UserInfo from 'features/userInfo/UserInfo';

describe('Shift List', () => {
  it('should render items', () => {
    render(
      <Provider store={store}>
        <UserInfo />
      </Provider>
    );

    expect(
      screen.getByText(/you have no reserved shifts/i)
    ).toBeInTheDocument();
  });
});
