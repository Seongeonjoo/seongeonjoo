import api from '~/api';

export type inputType = {
  posting?:boolean,
  articleSrchCd?:string,
  articleSrchWord?:string,
  page?:number,
  itemsPerPage?:number;
}

export type detailType = {
  articleId : string,
}

export default (data:inputType) => 
  api({
    method: 'get',
    // url: `http://pc.bnet.com:8081/common/api/boards/reference-room/articles`,
    url: `http://api.bnet.com/common/api/boards/usp-notice/articles`,
    params: data,
  });


export const fetchReferenceRoomDetail = (data: detailType) =>
  api({
    url: `http://api.bnet.com/common/api/boards/usp-notice/articles/${data}`,
    // url: `http://pc.bnet.com:8081/common/api/boards/usp-notice/articles/${articleId}`,
    method:'get',
  })