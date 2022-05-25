import 'bootstrap';
import App from './App';
import ReactDOM from 'react-dom';
import { fetchRefreshToken } from '~/fetches';
import authentication from 'shared/authentication';

const start = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

fetchRefreshToken()
  .then((res: any) => {
    authentication.set(res.data);
    start();
  })
  .catch(start);
