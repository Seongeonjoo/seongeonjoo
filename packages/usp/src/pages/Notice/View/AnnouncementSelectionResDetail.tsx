// 공고알림/ -> 공지사항 상세페이지
// import React from "react"
import * as styles from '../styles';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import dayjs from 'shared/libs/dayjs';
import {useNavigate, useLocation } from 'react-router-dom';
import fetchDownload from '~/fetches/fetchDownload';
import { fetchAnnouncementSelectionResDetail } from '~/fetches';
import { useEffect } from "react";
import BreadCrumb from '../../../components/BreadCrumb';
import {CustomButton} from 'shared/components/ButtonComponents';

function AnnouncementSelectionResDetail () {
    const navigate = useNavigate();
    const receive:any = useLocation();
    // 목록에서 받아온 값 저장
    console.log(receive);
    
    const [pblancId, setPblancId] = useState(receive.state.slctnPblancId);
    const [data,setData]:any = useState([]);

    console.log(pblancId)
    const getData = () => {
      fetchAnnouncementSelectionResDetail(pblancId).then((res:any) => {
        setData(res);
      })
    }
    useEffect(() => {
      getData();
    },[pblancId])

    console.log(data)

    const fileList = data.fileList;
    const slctnList = data.slctnList;
    const detailList = data.detailList;

    const goPre = () => {
      setPblancId(data.preSlctnPblancId);
    }
    
    //다음글
    const goNext = () => {
      setPblancId(data.nextSlctnPblancId);
    }
    
    //목록으로 이동
    const goAnnouncementSelectionRes = () => {
      navigate('/Notice/AnnouncementSelectionRes');
    };

    const download = async (attachmentId: any) =>{ 
      fetchDownload(`http://api.bnet.com/pms/api/front/slctn-pblanc/${pblancId}/atchmnfl/${attachmentId}`);
    }
    
  //다운로드 박스
  const DownloadBox = () => {
    return (
      <Box css={styles.box_type}>
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <strong>첨부파일</strong>
            <Stack className="flexmo" css={styles.btnDown}>
              {!!fileList
                ? fileList.map((item: any) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <div key={item.attachmentId}>
                      <Button onClick={() => download(item.attachmentId)}>
                        <span>{item.attachmentNm}</span>
                      </Button>
                    </div>
                  ))
                : null}
            </Stack>
          </Stack>
        </Box>
    );
  }
    return (
      <div css={styles.container}>
        <Box css={styles.sub_cont01}>
          <div className="benner">
            <BreadCrumb />
            <div className="content">
              <div className="txtbox">
                <h2 className="tit">선정결과공고</h2>
                <p>지원하신 사업에 대한 선정결과를 확인하실 수 있습니다.</p>
              </div>
            </div>
            <Stack
              direction="row"
              justifyContent="space-between"
              className="bottom_card"
            >
              <p>인공지능산업융합사업단 공고 제{data.slctnPblancNo}호</p>
            </Stack>
          </div>
        </Box>
        <Box css={styles.sub_cont02}>
            {/* 상세 list 리스트 */}
            <div css={styles.detal_list}>
              {/* 텍스트 상단 */}
              <Box css={styles.detal_txtBox}>
                <Typography variant="h5" component="div">
                  {data.slctnPblancNm}
                </Typography>
                <div className="text01">
                {data.slctnPblancSumry}
                </div>
                <p>
                  {' '}
                  {dayjs(data.slctnPblancDay).format('YYYY년')}{' '}
                  {dayjs(data.slctnPblancDay).format('MM월')}{' '}
                  {dayjs(data.slctnPblancDay).format('DD일')}
                </p>
                <p className="bold">인공지능산업융합사업단장</p>
              </Box>
              <Box css={styles.table01}>
                <table>
                  <colgroup></colgroup>
                  <tbody>
                    <tr>
                      <th>관련 모집공고</th>
                      <td>{data.pblancNm}</td>
                    </tr>
                    <tr>
                      <th>담당부서</th>
                      <td>{data.chrgDeptNm}</td>
                      <th>담당자</th>
                      <td>{data.memberNm}{data.positionNm} {data.email} / {data.telNo}</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
              <Box css={styles.text_list01}>
                <dl>
                  <dt>{'선정업체'}</dt>
                  <dd>
                    <Box css={styles.table_02}>
                      <table>
                        <tbody>
                          <tr>
                            <th>번호</th>
                            <th>접수번호</th>
                          </tr>
                          {!!slctnList?slctnList.map((item:any, i:number) => (
                          <tr key={i}>
                            <td>{item.rn}</td>
                            <td>{item.receiptNo}</td>
                          </tr>
                          )):null}
                        </tbody>
                      </table>
                    </Box>
                  </dd>
                </dl>
                {!!detailList?detailList.map((item:any, i:number) => (
                  <dl key={i}>
                    <dt>
                    {item.sj}
                    </dt>
                    <dd>
                    {item.detailCn}
                    </dd>
                  </dl>
                )):null}
              </Box>
              <DownloadBox/>
              <div css={styles.bottom_list}>
                {data.preSlctnPblancId!=null? (
                <a onClick={goPre}>
                  <div className="txt01">
                  <div className="prev">
                    이전글
                  </div>
                  </div>
                  <div className="txt02">{data.preSlctnPblancNm}</div>
                </a>
                    ) : null}
                    {data.nextSlctnPblancId!=null ? (
                <a onClick={goNext}>
                  <div className="txt01">
                  <div className="next">
                    다음글
                  </div>
                  </div>
                  <div className="txt02">
                    {data.nextSlctnPblancNm}
                  </div>
                </a>
                    ) : null}
              </div>
              <Stack direction="row" justifyContent="center" css={styles.btnGroup}>
                <CustomButton label={'목록'} type={'listBack'} color={'outlined'} onClick={goAnnouncementSelectionRes}/>
              </Stack>
          </div>
        </Box>
      </div>
    );
  }

export default AnnouncementSelectionResDetail;