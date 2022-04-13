import api from '~/api';
export default (key?: string) =>
  api({
    url: `/common/api/boards/usp-temp1/articles${
      key ? `/${key}` : `?title=&page=1&itemsPerPage=2`
    }`,
    method: 'get',
  });
