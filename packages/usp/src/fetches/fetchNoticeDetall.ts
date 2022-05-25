import axios from 'shared/libs/axios';

export default (pblancId: string | null | undefined,queryBox:string) => {
  return axios({
    method: 'get',
    url: `/pms/api/front/bsns-pblanc/${pblancId}/?${queryBox}`,
  });
};