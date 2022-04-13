import axios from 'shared/libs/axios';
type UserType = {
  loginId: string;
  passwd: string;
};
export default (data: UserType) => {
  return axios({
    method: 'post',
    url: '/member/api/login/member',
    data,
  });
};
