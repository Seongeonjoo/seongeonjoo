/* eslint-disable import/no-anonymous-default-export */
import axios, {AxiosRequestConfig, AxiosResponse, Canceler} from 'axios';
import authentication from '../authentication';
import async from 'async';
import {useQuery} from "react-query";
import {BaseResponse, ErrorMessage} from '../utils/Model';
import dayjs from "../libs/dayjs";

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


/* Axios TEST 중.*/
export type RequestCancelRef = (cancel: Canceler) => void
type RequestOptions = {
  cancelRef?: RequestCancelRef
}

const TokenUpdate = async() => {
  const certificate = authentication.get();
  const left = dayjs(certificate.accessTokenExpiresAt).diff(+new Date(), 's')

  if (
    left > 0 && certificate.accessToken &&
    dayjs().diff(certificate.updateAt, 's') > 1
  ) {
    try {
      const res = await axios({
        url: '/member/api/login/refresh-token/member',
        method: 'post',
      });
      authentication.set(res.data);

      return true;
    }catch(e) {return false;}
  }
  return false;
}

const Headers = () => {
  const token = authentication.getToken();
  let headers = {};
  if (token) {
    headers = {Auth: 'Bearer ' + token};
  }

  return headers;
}

const _request = async (
  type: 'GET' | 'POST' | 'DELETE',
  url: string,
  data?: any,
  opts?: RequestOptions,
): Promise<any> => {
  // 토큰 갱신
  const isUpdate = await TokenUpdate();
  // if (!isUpdate) return;

  let resData: BaseResponse | null = null;
  const headers = Headers();
  const start: Date = new Date(Date.now());

  const key = url;
  if (process[key]) return process[key];

  try {
    let res = null;

    if (type === 'GET') {
      res = await xhr.get(url, {
        ...config,
        headers: headers, params: data,
        cancelToken: opts && opts.cancelRef && new axios.CancelToken(opts.cancelRef),
      }).then(clear);
    } else if (type === 'POST') {
      res = await xhr.post(url, data, {
        ...config,
        headers: headers,
        cancelToken: opts && opts.cancelRef && new axios.CancelToken(opts.cancelRef),
      }).then(clear);
    } else if (type === 'DELETE') {
      res = await xhr.delete(url, {
        ...config,
        headers: headers,
        cancelToken: opts && opts.cancelRef && new axios.CancelToken(opts.cancelRef),
      }).then(clear);
    }

    resData = res!.data;

  } catch (e) {
    clear(e);

    // cancelRef를 사용해서 요청을 취소시켰을 경우
    if (axios.isCancel(e)) {
      console.debug(['API CANCEL', {url}]);
      // @ts-ignore
      throw [{message: e.message, url}];
    }

    // status가 200이 아닌 모든 경우
    // @ts-ignore
    const {data, status} = e.response;
    if (status === 403 || status === 401) {
      throw [{message: 'Access Denied', url} as ErrorMessage];
    }

    console.warn(['API ERROR', {url, status, data}]);
    throw [{message: 'ERROR', url} as ErrorMessage];
  }

  // 서버에서 반환된 에러 처리
  // GET은 서버 정의 에러가 없으며 문제가 발생한다면 null이 반환된다
  if (type !== 'GET' && resData && !resData.success) {

    throw resData.errors;
  }

  return resData;
}

export const AxiosGet = async(url: string, param: any, reqOpts?: RequestOptions) => {
  return _request('GET', url, param, reqOpts);
}

export const AxiosPost = async(url: string, data?: any, reqOpts?: RequestOptions) => {
  return _request('POST', url, data, reqOpts);
}

export const AxiosDelete = async(url: string, data?: any, reqOpts?: RequestOptions) => {
  return _request('DELETE', url, data, reqOpts);
}

/* react-query를 사용해서 Axios통신. */
export const GetQuery = (url: string, data?: any, reqOpts?: RequestOptions, queryOpts?: any) => {
  return useQuery([url,data], () => _request('GET', url, data, reqOpts));
}

export const PostQuery = (url: string, data?: any, reqOpts?: RequestOptions, queryOpts?: any) => {
  return useQuery([url,data], () => _request('POST', url, data, reqOpts), queryOpts);
}

export const DeleteQuery = (url: string, data?: any, reqOpts?: RequestOptions, queryOpts?: any) => {
  return useQuery([url,data], () => _request('DELETE', url, data, reqOpts), queryOpts);
}