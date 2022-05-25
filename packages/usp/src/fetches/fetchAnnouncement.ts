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

export type selectionType = {
  slctnPblancNm : string,
  page? : number,
  itemsPerPage? : number,
}

//목록 가져오기
export default (data: inputType) =>
  api({
    url: `http://api.bnet.com/common/api/boards/usp-notice/articles`,
    // url: `http://pc.bnet.com:8081/common/api/boards/usp-notice/articles`,
    method:'get',
    params:data,
  })


export const fetchAnnouncementDetail = (data: detailType) =>
  api({
    url: `http://api.bnet.com/common/api/boards/usp-notice/articles/${data}`,
    // url: `http://pc.bnet.com:8081/common/api/boards/usp-notice/articles/${articleId}`,
    method:'get',
  })
