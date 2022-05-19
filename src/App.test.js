/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App', () => {
  it('renders main page content', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/all shifts/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  it('submits new user', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText(/user name/i);
    const mailInput = screen.getByPlaceholderText(/user email/i);
    const passInput = screen.getByPlaceholderText(/user password/i);
    const loginButton = screen.getByText(/log in/i);

    expect(loginButton).toBeInTheDocument();

    fireEvent.input(nameInput, { target: { value: 'Polina' } });
    fireEvent.input(mailInput, { target: { value: 'polina@zhitomir.com' } });
    fireEvent.input(passInput, { target: { value: '123' } });
    fireEvent.click(loginButton);

    expect(screen.getByText(/welcome, polina/i)).toBeInTheDocument();
  });
});
