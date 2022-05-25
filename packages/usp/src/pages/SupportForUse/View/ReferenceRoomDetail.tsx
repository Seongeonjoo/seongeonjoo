// 공고알림/ -> 공지사항 상세페이지
// import React from "react"
import * as styles from '../styles';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import dayjs from 'shared/libs/dayjs';
import { useNavigate, useLocation } from 'react-router-dom';
import fetchDownload from '~/fetches/fetchDownload';
import { fetchReferenceRoom, fetchReferenceRoomDetail } from '~/fetches';
import { useEffect } from "react";
import { CustomButton } from 'shared/components/ButtonComponents';

function ReferenceRoomDetail () {
  const navigate = useNavigate();
  const receive:any = useLocation();
  // 목록에서 받아온 값 저장
  const params = {
    articleSrchCd : receive.state.articleSrchCd,
    articleSrchWord : receive.state.articleSrchWord,
    itemsPerPage: receive.state.total
  }
  const [articleId, setArticleId] = useState(receive.state.item.articleId);
  const [rn,setRn] = useState(receive.state.item.rn);
  const [list,setList] = useState([]);
  const [data,setData]:any = useState([]);
  const getList = () => {
    fetchReferenceRoom(params).then((res:any)=>{
      setList(res.list);
    })
  }
  
  useEffect(()=>{
    getList();
  },[])

  const getData = () => {
    fetchReferenceRoomDetail(articleId).then((res:any) => {
      setData(res);
    })
  }
  useEffect(()=>{
    getData();
  },[articleId])

  console.log(data)
  // const urlList = data.articleUrlList; 
  const attachmentList = data.attachmentList;
  const articleCnList = data.articleCnList;
  
  //이전글
  function isPre(element:any){
    if(element.rn === rn-1){
      return true;
    }
  }
  const pre:any = list.filter(isPre);
  console.log(list.filter(isPre))
  const goPre = () => {

    setArticleId(pre[0].articleId);
    setRn(rn-1);
  }
  
  //다음글
  function isNext(element:any){
    if(element.rn === rn+1){
      return true;
    }
  }
  const next:any = list.filter(isNext);
  const goNext = () => {
    
    setArticleId(next[0].articleId);
    setRn(rn+1);
  }
  
  //목록으로 이동
  const goReferenceRoom = (item:any) => {
    navigate('/SupportForUse/ReferenceRoom', {
      state: {
        item:item,
      },
    });
  };
  
  const download = async (attachmentId: any) =>{ 
    fetchDownload(`http://api.bnet.com/common/api/boards/usp-notice/articles/${articleId}/attachments/${attachmentId}`);
    // fetchDownload(`http://pc.bnet.com:8081/common/api/boards/usp-notice/articles/${articleId}/attachments/${attachmentId}`);
  }
return (
  <div css={styles.container}>

    <Box >
      {/* 상세 list 리스트 */}
      <div >
        {/* 텍스트 상단 */}
        <Box >
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
          <div className="date">
            <span>조회 <em>{data.readCnt}</em></span>
            <span><em>{dayjs(data.updatedDt).format('YYYY-MM-DD')}</em></span>
          </div>
        </Box>
        <Box >
        <div className="img_box">
              <img src={`http://api.bnet.com/common/api/boards/usp-notice/articles/${articleId}/pcthumbnail`}></img>
            </div>
          {!!articleCnList? articleCnList.map((item:any) => (       
        <Typography color="text.secondary" className="txt_box">
          {data.article}
          {item.articleCn}
        </Typography>
        )):null} 
        </Box>
        <Box >
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            <strong>첨부파일</strong>
            <Stack className="flexmo" >
              {!!attachmentList
                ? attachmentList.map((item: any) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <div key={item.attachmentId}>
                      <Button onClick={() => download(item.attachmentId)}>
                        <span>{item.fileNm}</span>
                      </Button>
                    </div>
                  ))
                : null}
            </Stack>
          </Stack>
        </Box>
        <ul >
          {Object.keys(pre).length !==0?
          <li>
                <div className="txt01">
                    <a className="prev" onClick={goPre}>
                      이전글
                    </a>
                </div>
                <div className="txt02">
                {pre[0].title}
                </div>
          </li>
              : null}
          {Object.keys(next).length !==0?
          <li>
              <div className="txt01">
                    <a className="next" onClick={goNext}>
                      다음글
                    </a>
              </div>  
              <div className="txt02">
              {next[0].title}
              </div>
          </li>
              :null}
        </ul>
        <Stack direction="row" justifyContent="center">
          <CustomButton label={'목록'} type={'listBack'} color={'outlined'} onClick={() => {goReferenceRoom(list)}}/>
        </Stack>
      </div>
    </Box>
  </div>
);
}


export default ReferenceRoomDetail;
