import { Route, Router } from 'react-router-dom';
import { History } from 'history';

interface IrouterProps {
  history: History;
}

const RouterComponent = ({ history }: IrouterProps): JSX.Element => {
  return (
    <div></div>
    // <Router history={history}>
    //   <Route />
    //   <Route />
    //   <Route />
    // </Router>
  );
};

export default RouterComponent;
