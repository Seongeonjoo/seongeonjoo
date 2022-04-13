import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import authentication from '../authentication';
import async from 'async';
const q = async.queue(function (task: any, callback) {
  console.log(task);
  setTimeout(callback, 3000);
}, 2);
const xhr = axios.create();
xhr.defaults.withCredentials = true;
xhr.defaults.timeout = 1000 * 5 * 60; // 5분

const process: { [key: string]: any } = {};

export type { AxiosRequestConfig, AxiosResponse };

let config: any = null;
export const setup = (params: AxiosRequestConfig) => {
  config = params;
};

//* 성공, 실패 모두 키값 삭제
function clear(res: any) {
  const key = res.config?.url;
  delete process[key];
  return res;
}

export default async (req: AxiosRequestConfig<any>) => {
  if (!config) {
    console.error('API Config 설정을 먼저 해야 합니다.');
  }
  const token = authentication.getToken();
  let headers = {};
  if (token) {
    headers = { Auth: 'Bearer ' + token };
  }

  //* 요청한 URL로 이미 진행 중인 API 가 있다면, 진행 중인 Promise 반환
  const key: any = req.url;
  if (process[key]) return process[key];

  process[key] = xhr({ headers, ...config, ...req });
  return process[key].then(clear).catch((e: any) => Promise.reject(clear(e)));
};
