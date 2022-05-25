//.src/react-app-env.d.ts
/// <reference types="react-scripts" />
interface Window {
    Kakao: any,
    gapi:any,
    naver_id_login:any,
}
declare module 'react-naver-login';
declare module 'react-kakao-login';
declare module 'react-full-page';

