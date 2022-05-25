import api from '~/api';
export default (codeGroup?: string) =>
  api({
    url: `http://api.bnet.com/member/api/codegroups/${codeGroup}/codes/`,
    method: 'get',
  });
