import axios from 'shared/libs/axios';
import { UserType } from '~/models/ModelSignin';

export default (data: UserType) => {
  return axios({
    method: 'post',
    url: '/member/api/login/member',
    data,
  });
};
