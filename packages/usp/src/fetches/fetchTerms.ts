import api from '~/api';
export default (types: string) =>
  api({
    url: `/common/api/terms/${types}/now`,
    method: 'get',
  });