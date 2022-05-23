/* eslint-disable testing-library/no-debugging-utils */
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import ShiftPage from 'pages/ShiftPage';

describe('Shift List', () => {
  it('should render items', () => {
    render(
      <Provider store={store}>
        <Router>
          <ShiftPage />
        </Router>
      </Provider>
    );

    // expect(
    //   screen.getByText(/you have no reserved shifts/i)
    // ).toBeInTheDocument();
  });
});
