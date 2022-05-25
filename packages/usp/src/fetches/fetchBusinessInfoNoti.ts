import api from '~/api';

//알림정보 등록
export default (data:any) => {
  api({
    method: 'post',
    // url: `http://api.bnet.com/pms/api/front/info-ntcn`,
    url: `http://pc.bnet.com:8084/pms/api/front/info-ntcn`, 
    data
  })
};

//삭제
export const fetchBusinessInfoNotiDelete = () =>
  api({
    method: 'delete',
    // url: `http://api.bnet.com/pms/api/front/info-ntcn`,
    url: `http://pc.bnet.com:8084/pms/api/front/info-ntcn`,
  })

//사업정보 받기
export const fetchBusinessInfoNotiGet = () =>
  api({
    method: 'get',
    // url: `http://api.bnet.com/pms/api/front/info-ntcn/bsrList`,
    url: `http://pc.bnet.com:8084/pms/api/front/info-ntcn/bsrList`,    
  })

//교육정보 받기
export const fetchEduInfoNotiGet = () =>
  api({
    method: 'get',
    // url: `http://api.bnet.com/pms/api/front/info-ntcn/eduList`,
    url: `http://pc.bnet.com:8084/pms/api/front/info-ntcn/eduList`,    
  })