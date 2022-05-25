// 참여이벤트/ ->  행사/이벤트상세 페이지
// import React from "react"
import * as styles from '../../Notice/styles';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import dayjs from 'shared/libs/dayjs';
import { useNavigate, useLocation } from 'react-router-dom';
import fetchDownload from '~/fetches/fetchDownload';
import { fetchAnnouncement, fetchAnnouncementDetail } from '~/fetches';
import { CustomButton } from 'shared/components/ButtonComponents';

function HonsaEventDetail () {
    const navigate = useNavigate();
    const receive:any = useLocation();
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
      fetchAnnouncement(params).then((res:any)=>{
        setList(res.list);
      })
    }
    
    useEffect(() => {
      getList();
    },[])
    
    const getData = () => {
      fetchAnnouncementDetail(articleId).then((res:any) => {
        setData(res);
      })
    }
    useEffect(() => {
      getData();
    },[articleId])
    
    const urlList = data.articleUrlList; 
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
    const goAnnouncement = (item:any) => {
      navigate('/EventNews/HonsaEvent', {
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
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <div className="content">
            <div className="txtbox">
              <h2 className="tit" style={{ marginTop: 0 }}>
                행사/이벤트
              </h2>
              <p>
                AICA 및 연계기관들이 주관 및 주최하는 각종 행사와 캠페인 소식들을 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        {/* 상세 list 리스트 */}
        <div className="content">
          <div css={styles.detal_list}>
            {/* 텍스트 상단 */}
            <Box css={styles.detal_txtBox}>
              <Typography variant="h5" component="div">
                {data.title}
              </Typography>
              <div className="date">
                <span>조회 <em>{data.readCnt}</em></span>
                <span><em>{dayjs(data.updatedDt).format('YYYY-MM-DD')}</em></span>
              </div>
            </Box>
            <Box css={styles.detal_img}>
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
            <Box css={styles.box_type}>
              <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
                <strong className="noline">관련 사이트 주소</strong>
                <Stack className="flexmo">
                  {!!urlList
                    ? urlList.map((item: any) => (
                        <div className="link_type" key={item.urlId}>
                          <a href={item.url}>{item.url}</a>
                        </div>
                      ))
                    : null}
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <strong>첨부파일</strong>
                <Stack className="flexmo" css={styles.btnDown}>
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
            <div css={styles.bottom_list}>
              {Object.keys(pre).length !==0?
              <a onClick={goPre}>
                <div className="txt01">
                  <div className="prev">
                    이전글
                  </div>
                </div>
                <div className="txt02">
                {pre[0].title}
                </div>
              </a>
                : null}
              {Object.keys(next).length !==0?
              <a onClick={goNext}>
                <div className="txt01">
                  <div className="next">
                    다음글
                  </div>
                </div>  
                <div className="txt02">
                {next[0].title}
                </div>
              </a>
                :null}
            </div>
            <Stack direction="row" justifyContent="center" css={styles.btnGroup}>
              <CustomButton label={'목록'} type={'listBack'} color={'outlined'} onClick={() => {goAnnouncement(list)}}/>
            </Stack>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default HonsaEventDetail;
