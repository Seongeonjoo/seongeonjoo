import 'shared/styles/global.scss';
import { setup } from 'shared/libs/axios';
const api = {
  baseURL: 'http://pc.bnet.com:8082',
};
setup(api);
export default { config: { api } };
