import api from '~/api';

export type inputType = {
  loginId?:string;
  memberNm:string,
  birthday?:string | undefined,
  bizrno?:string | undefined,
  mobileNo:string,
  email:string,
  key:string,
}
export type certNoType = {
  key:string,
  certNo?:string,
  mobileNo?:string,
  email?:string,
}

export type pwChangeType = {
  key:string,
  passwd1:string,
  passwd2:string,
}


// id 찾기 개인
export default (data: inputType) =>
  api({
    url: `/member/api/help/find/individual-id`,
    method: 'post',
    data,
});

// id 찾기 사업자
export const fetchIdTrouverBiz = (data: inputType) =>   
  api({
    url: `/member/api/help/find/bzmn-id`,
    method: 'post',
    data,
});
// pw 재설정 개인
export const fetchFactorPw= (data: inputType) =>   
  api({
    url: `/member/api/help/find/individual-passwd`,
    method: 'post',
    data,
});
// pw 재설정 사업자
export const fetchFactorPwBiz = (data: inputType) =>   
  api({
    url: `/member/api/help/find/bzmn-passwd`,
    method: 'post',
    data,
});

// 핸드폰 인증발송
export const fetchFactorPhoneCertReq= (data: certNoType) =>   
  api({
    url: `/member/api/help/find/phone-cert-req`,
    method: 'post',
    data,
});
// 핸드폰 확인
export const fetchFactorPhoneCertCheck = (data: certNoType) =>   
  api({
    url: `/member/api/help/find/phone-cert-check`,
    method: 'post',
    data,
});
// 이메일 인증발송
export const fetchFactorEmailCertReq= (data: certNoType) =>   
  api({
    url: `/member/api/help/find/email-cert-req`,
    method: 'post',
    data,
});
// 이메일 확인
export const fetchFactorEmailCertCheck = (data: certNoType) =>   
  api({
    url: `/member/api/help/find/email-cert-check`,
    method: 'post',
    data,
});

// 비밀번호 변경
export const fetchFactorPwChange = (data: pwChangeType) =>   
  api({
    url: `/member/api/help/find/change-passwd`,
    method: 'post',
    data,
});

// 비밀번호 확인
export const fetchFactorPwCheck = (pw: string) =>   
  api({
    url: '/member/api/members/me/passwd-check',
    method: 'post',
    params: { passwd: pw },
});
