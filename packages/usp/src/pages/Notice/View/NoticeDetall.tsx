import React, { useState, useEffect,Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '~/api';
import useSWR, { mutate } from 'swr';
import * as styles from '../styles';
import dayjs from 'shared/libs/dayjs';
import BreadCrumb from '../../../components/BreadCrumb';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material';
// import { DataService } from '~/service/DataService';
import fetchFileDownLoad from '~/fetches/fetchDownload';
import {FacebookShareButton,FacebookIcon} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import kakao_icon from "../../../../public/images/common/kakao_icon.png";
import styled from '@emotion/styled';
import { ModalComponents } from '~/../../shared/src/components/ModalComponents';
// import { fetchNoticeDetall } from '~/fetches';
// import { NoticeDataResponse } from '~/models/Model';fetchNoticeDetall
/*
  작성일    :   2022/05/07
  화면명    :   공고알림 -> 모집공고 -> 공고상세
  화면/개발 :   Seongeonjoo / navycui
*/
const {Kakao} = window;
const currentUrl = window.location.href;
function NoticeDetall() {
  //#region -------상태 및 서비스 영역
  // const receive: any = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  // type modalType = 'normal' | 'confirm';
  // const [type, setType] = useState<modalType>('normal');
  // const [data, setData] = useState(false);
  // const handlerModalOpen = (type: modalType) => {
  //   setOpen(true);
  //   setType(type);
  // };
  
  const [pblancId, setPblancId] = useState<string | null | undefined>(currentUrl.split('?')[0].split('/')[4]);
  
  const fetcher = (url: string) => {
    return api({ baseURL: 'http://api.bnet.com', method: 'get', url });
  };

  const { data ,error} = useSWR(`/pms/api/front/bsns-pblanc/${pblancId}/?${currentUrl.split('?')[1]}`, fetcher);
  
  /* 공고상세 조회*/
  // const {data, error, isFetching, isLoading} = DataService.FetchNoticeDetall({pblancId:pblancId,queryBox:currentUrl.split('?')[1]});
  // setDetailList(data);

  //화면초기 렌드링 실행
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('d8630bd87de60999c46bded08b4d6bd1');
  }}, []);

  useEffect(() => {
    mutate('system://portal',`/pms/api/front/bsns-pblanc/${pblancId}/?${currentUrl.split('?')[1]}`);
  }, [pblancId]);

  if (error) {
    // alert("해당되는 지원공고가 없습니다");
    console.log(error.response)
    return (
      <Fragment>
        <ModalComponents open={open} type={'normal'} title={error.response.status} content={error.response.data.message} 
          onConfirm={() => {
            setOpen(false);
            // window.location.reload();
            window.location.href = "/Notice/Notice";
          }}
          onClose={() => {
            setOpen(false);
          }}
        >
        </ModalComponents>
      </Fragment>
    )
    // window.location.href = "/Notice/Notice";
  }
  
  const handleKakaoButton = () => {
    Kakao.Link.sendScrap({
      requestUrl: currentUrl.split('?')[0],
    });
  };

  // 이전 글 보기
  const handleGoPreView = (e: React.MouseEvent<HTMLElement>) => {
    setPblancId(data?.prePblancId);
  };
  // 다음 글 보기
  const handleGoNextView = (e: React.MouseEvent<HTMLElement>) => {
    setPblancId(data?.nextPblancId);
  };
  // 목록 가기
  const GoNoticeList = () => {
    navigate('/Notice/Notice');
  };
  // 사업신청 가기
  const GoBusinessApp = () => {
    navigate('/biz/BusinessAppMgt/BusinessApp');
  };
  //#endregion ---- end

  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">모집공고</h2>
              <p>
                AICA에서 진행하는 사업 공고를 확인하고 신청할 수 있습니다.
                <br />
                사업 신청 전에 신청 대상, 사전준비자료, 사업안내서 등을 충분히
                숙지하시고 신청을 진행하시기 바랍니다.
              </p>
            </div>
          </div>
          <Stack
            direction="row"
            justifyContent="space-between"
            className="bottom_card"
          >
            <p>인공지능산업융합사업단 공고 제2021-50호</p>
            <Stack direction="row" className="tag" spacing={1}>
              {data?.rmndrDay ? (
                <Chip label={'공고종료'} className="blue" />
              ) : (
                <Chip label={'마감 D-' + data?.rmndrDay} className="wh" />
              )}
            </Stack>
          </Stack>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          {/* 상세 list 리스트 */}
          <div css={styles.detal_list}>
            {/* 텍스트 상단 */}
            <Box css={styles.detal_txtBox}>
              <Typography variant="h5" component="div">
                {data?.pblancNm}
                <br />
                고도화 지원기업 모집공고
              </Typography>
              <div className="text01">
                {data?.pblancSumry}
                <br />
              </div>
              <p>
                {' '}
                {dayjs(data?.pblancDay).format('YYYY년')}{' '}
                {dayjs(data?.pblancDay).format('MM월')}{' '}
                {dayjs(data?.pblancDay).format('DD일')}
              </p>
              <p className="bold">인공지능산업융합사업단장</p>
            </Box>
            <Box css={styles.table01}>
              <table>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>사업분야</th>
                    <td>
                      {data?.recomendCl !== null
                        ? data?.recomendCl.split(',')[0]
                        : ''}
                    </td>
                    <th>모집유형</th>
                    <td>{data?.ordtmRcrit ? '정시모집' : '상시모집'}</td>
                  </tr>
                  <tr>
                    <th>사업기간</th>
                    <td>{data?.bsnsPd}</td>
                    <th>사업규모</th>
                    <td>총 {data?.bsnsScale}백만원 </td>
                  </tr>
                  <tr>
                    <th>선정규모</th>
                    <td>10 업체{data?.slctnScale}(명) 내외</td>
                    <th>모집대상</th>
                    <td>{data?.applyMberType}</td>
                  </tr>
                  <tr>
                    <th>접수기간</th>
                    <td>{data?.rceptPd}</td>
                    <th>접수 마감시간</th>
                    <td>{data?.rceptClosingHm}</td>
                  </tr>
                  <tr>
                    <th>담당부서</th>
                    <td>{data?.chrgDeptNm}</td>
                    <th>담당자</th>
                    <td>
                      {' '}
                      {data?.memberNm} {data?.positionNm} {data?.email} /{' '}
                      {data?.telNo}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box css={styles.text_list01}>
              {data?.detailList.length ? (
                data?.detailList.map((item: any, i: number) => (
                  <dl key={i}>
                    <dt>{item.sj}</dt>
                    <dd>{item.detailCn}</dd>
                  </dl>
                ))
              ) : (
                <Button>첨부파일 없습니다.</Button>
              )}
            </Box>
            <Box css={styles.box_type}>
              <Stack direction="row" alignItems="center">
                <strong>첨부파일</strong>
                <Stack className="flexmo" css={styles.btnDown}>
                  {data?.fileList.length ? (
                    data?.fileList.map((fl: any, i: number) => (
                      <Button
                        key={i}
                        onClick={() =>
                          fetchFileDownLoad(
                            '/common/api/boards/usp-notice/articles/article-31e99799b0034e3f8fbc25d991e74ab5/pcthumbnail'
                          )
                        }
                      >
                        {fl.fileNm}
                      </Button>
                    ))
                  ) : (
                    <span>첨부파일 없습니다.</span>
                  )}
                </Stack>
              </Stack>
            </Box>
            <Stack direction="row" justifyContent="center" css={styles.btnGroup}>
              <Button className="blue02" onClick={GoBusinessApp}>
                사업신청
              </Button>
            </Stack>
            <Stack direction="row" justifyContent="end" css={styles.btnMinSns}>
              {/* <Button className="face"></Button> */}
              <FacebookShareButton url={currentUrl.split('?')[0]}>
                <FacebookIcon size={40} round={true} borderRadius={24} className="face"></FacebookIcon>
              </FacebookShareButton>
              {/* <Button className="kakao"></Button> */}
              <KakaoShareButton onClick={handleKakaoButton}>
                <KakaoIcon src={kakao_icon}></KakaoIcon>
              </KakaoShareButton>
              <Button className="insta"></Button>
              {/* <Button className="nomal">URL복사</Button> */}
              <CopyToClipboard text={currentUrl.split('?')[0]}>
                <Button className="nomal">URL복사</Button>
              </CopyToClipboard>
            </Stack>
            {(data?.prePblancId || data?.nextPblancId) ? (
              <div css={styles.bottom_list}>
                {data?.prePblancId ? (
                  <a onClick={handleGoPreView}>
                    <div className="prev"></div>
                    <div className="txt01">이전글</div>
                    <div className="txt02"> {data?.prePblancNm} </div>
                  </a>
                ) : null}
                {data?.nextPblancId ? (
                  <a onClick={handleGoNextView}>
                    <div className="next"  ></div>
                    <div className="txt01">다음글</div>
                    <div className="txt02"> {data?.nextPblancNm}</div>
                  </a>
                ) : null}
              </div>
            ) : null}
            <Stack direction="row" justifyContent="center" css={styles.btnGroup}>
              <Button className="linebtn mini" onClick={GoNoticeList}>
                목록
              </Button>
            </Stack>
          </div>
        </div>
      </Box>
    </div>
  );
}
const KakaoShareButton = styled.a`
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 24px;
`;
export default NoticeDetall;
