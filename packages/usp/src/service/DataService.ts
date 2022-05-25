import {UseQueryResult} from "react-query";
import { GetQuery,AxiosGet} from "shared/libs/axios";
import {DataResponse, NoticeDataResponse,TermsResponse} from "~/models/Model";
import { EquipmentClassifyRequest, EquipmentClassifyResponse } from "./Model";

export class DataService {
  static BasicBoard(param: { page: number, pageSize: number, rowCount: number }): UseQueryResult<DataResponse, any> {
    return GetQuery("/common/api/boards/usp-notice/articles", {page: param.page + 1, itemsPerPage: param.pageSize})
  }

  static FetchNoticeDetall(param: {pblancId:string | null | undefined, queryBox?:string}): UseQueryResult<NoticeDataResponse, any> {
    return GetQuery(`/pms/api/front/bsns-pblanc/${param.pblancId}/?${param.queryBox}`)
  }

  // 약관조회
  static async FetchTermsGet(types: string, req: []): Promise<TermsResponse> {
    return await  AxiosGet(`/common/api/terms/${types}/now`, req)
  }

}