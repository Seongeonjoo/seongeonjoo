import {BaseResponse} from "shared/utils/Model";

export interface BoardData {
  articleId: string
  boardId: string
  title: string
  notice: boolean
  attachmentGroupId: string | null
  imageGroupId: string | null
  categoryCd: string | null
  posting: boolean
  webEditor: boolean
  sharedUrl: string | null
  thumbnailFileId: string | null
  readCnt: number
  creatorId: string
  createdDt: number
  updaterId: string
  updatedDt: number
  rn: number
}

export interface DataResponse extends BaseResponse {
  page: number
  itemsPerPage: number
  totalItems: number
  list: BoardData[]
}

export interface NoticedetailList{
  detailCn: string | null
  flag: string | null
  pblancDetailId: string | null
  sj: string | null
}

export interface NoticeFileList{
  attachmentGroupId: string
  attachmentId: string
  contentType: string
  createdDt: number
  creatorId: string | null
  downloadCnt: number | null
  fileDeleted: boolean | null
  fileNm: string | null
  fileSize: number | null
  updatedDt: string | null
  updaterId: string | null
}

export interface NoticeDataResponse extends BaseResponse {
  applyMberType: string
  attachmentGroupId: string
  bsnsPd: string | null
  bsnsScale: number | null
  chrgDeptNm: string | null
  detailList: NoticedetailList[]
  email: string | null
  fileList: NoticeFileList[]
  memberNm: string | null
  nextPblancId: string | null
  nextPblancNm: string | null
  ordtmRcrit: boolean | null
  pblancDay: string | null
  pblancId: string
  pblancNm: string | null
  pblancNo: string | null
  pblancSttus: string | null
  pblancSttusCd: string | null
  pblancSumry: string | null
  positionNm: string | null
  prePblancId: string | null
  prePblancNm: string | null
  rceptClosingHm: string | null
  rceptPd: string | null
  recomendCl: string | null
  rmndrDay: number | null
  slctnScale: number | null
  telNo: string | null
  thumbnailFileId: string | null
}

export interface TermsResponse{
  beginDay: string
  termsCn: string
  termsType: string
  createdDt?: string | null
  creatorId?: string | null
  updatedDt?: string | null
  updaterId?: string | null
}