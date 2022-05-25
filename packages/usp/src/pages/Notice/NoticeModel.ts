import {BaseResponse} from "shared/utils/Model";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export interface Noticeitems {
  img?:string;
  isNew: string;
  pblancDay: string;
  pblancId: string;
  pblancNm: string;
  pblancSttus: string;
  pblancSumry: string;
  rceptEndde: string;
  rceptPd: string;
  rdcnt: number;
  recomendCl: string;
  rmndrDay: number
}

export interface CodeType {
  code: string;
  codeGroup : string;
  codeNm: string;
  codeType?: string;
}

// 검색구분 코드
export const groupId:string[] = ["MEMBER_TYPE","PBLANC_STTUS","RECOMEND_CL"];
export const imsiBox:CodeType[] = [{codeGroup: "NOTICE_CODE", code: "false", codeNm: "정시모집"},{ codeGroup: "NOTICE_CODE", code: "true", codeNm: "상시모집"}]
export const alwaysCurrencies = [
  { value: '1', label: '공고일수' },
  { value: '2', label: '마감일순' },
  { value: '3', label: '조회순' },
];
export const alwaysBsnsPblan = [
  { value: '1', label: '공고일수' },
  { value: '2', label: '마감일순' },
  { value: '3', label: '조회순' },
];
export const alwaysPercontBox = [
  { value: '1', label: '10개씩' },
  { value: '2', label: '20개씩' },
  { value: '3', label: '30개씩' },
];
export const ontimeCurrencies = [
  { value: '1', label: '공고일수' },
  { value: '2', label: '마감일순' },
  { value: '3', label: '조회순' },
];
export const ontimeBsnsPblan = [
  { value: '1', label: '공고일수' },
  { value: '2', label: '마감일순' },
  { value: '3', label: '조회순' },
];
export const ontimePercontBox = [
  { value: '1', label: '10개씩' },
  { value: '2', label: '20개씩' },
  { value: '3', label: '30개씩' },
];

export const swiperParams = {
  navigation : true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 600, 
  pagination : true,
  breakpoints : {// 반응형		
    1280 : { // 테블릿
      slidesPerView : 4,
    },		
    760 : {  
      slidesPerView : 2.5,
    },
    320 : { 
      slidesPerView : 1.5,
    }
  }
}