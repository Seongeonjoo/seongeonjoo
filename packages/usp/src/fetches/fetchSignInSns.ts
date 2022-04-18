import axios from 'shared/libs/axios';
import {AuthenticationType} from 'shared/authentication/index';

export type SnsType = {
  accessToken: AuthenticationType;
  code?: string;
  uri: string;
};
export default (data: SnsType) => {
  return axios({
    method: 'post',
    url: `/member/${data.uri}`,
    data,
  });
};