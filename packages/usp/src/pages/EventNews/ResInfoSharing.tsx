// 참여이벤트/ ->  자원정보공유 페이지
// import React from "react"
import { Box, Stack, Autocomplete, TextField, Button, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState,useRef  } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as styles from '../Notice/styles';
import { fetchAnnouncement } from '~/fetches';
import { CustomButton } from 'shared/components/ButtonComponents';
import BreadCrumb from '../../components/BreadCrumb';

function ResInfoSharing() {
  const today = new Date();
  const navigate = useNavigate();
  today.setHours(today.getHours()-24);
  const searchInput:any = useRef("");
  const [params, setParams] = useState({
    posting : true,
    articleSrchCd : "",
    articleSrchWord : "",
    page : 1,
    itemsPerPage : 10,
  })
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [srchCd, setSrchCd] = useState("");
  const [srchWord, setSrchWord] = useState("")
  
  useEffect(() => {
    setSrchCd(params.articleSrchCd)
    setSrchWord(params.articleSrchWord)
  },[params.articleSrchCd,params.articleSrchWord])
  //처음 세팅
  const getList = () => {
    fetchAnnouncement(params).then((res:any) => {
        setList(res.list);
        setTotal(res.totalItems);
      })
    }
    
    useEffect(() => {
      getList();
    },[params])
   

  const moreInfo = () => {
    const itemsPerPage:any = params.itemsPerPage + 10;
    setParams((state) => ({ ...state, itemsPerPage }));
  }
  const goInfo = (item: any) => {
    navigate('/ResourceInfoSharing', {
      state: {
        item: item,
      },
    });
  }

  // 검색 버튼
  const handleClickSearch = () => {
    Search();
  }   

  const onKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      Search();
    }
  };

  const Search = () =>{
    const value = searchInput.current.value;
    if(value !== ""){
      setParams({...params,itemsPerPage:10, articleSrchCd : "ALL", articleSrchWord : value});
    }else{
      setParams({...params,itemsPerPage:10,articleSrchCd : "", articleSrchWord : ""});
    }
  }
  const top100Films = [{ title: '정시모집'},{ title: '상시모집'},{ title: '창업교육' },{ title: '시설/공간/보육'}]
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb/>
          <div className="content">
            <div className="txtbox">
              <h2 className="tit" style={{ marginTop: 0 }}>
                자원정보 공유
              </h2>
              <p>
                AI 관련 사업에 대한 업계 소식이나 개선 및 보완이 필요한 부분에 대한 의견을 남겨주세요<br />
                사업이나 프로젝트를 진행하면서 필요한 도움이나 자원에 대한 의견을 남겨 주시면 참고하여 더 나은 사업을 준비하겠습니다
              </p>
            </div>
            <Stack direction="row" css={styles.input_w}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    autoFocus
                    inputRef={searchInput}
                    placeholder="어떤 의견을 찾고 계신가요?"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    onKeyPress={onKeyPress}
                  />
                )}
              />
              <Button 
              variant="contained" 
              className="search_btn"
              onClick={handleClickSearch}
              >검색</Button>
            </Stack>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          {/* 상세 list 리스트 */}
          <div css={styles.detal_list}>
            <Stack
              spacing={6}
              direction="row"
              className="sub_tit"
              justifyContent="space-between"
            >
              <Typography variant="h4" component="div">
                자원정보공유
                <span className='data'><em>{total}</em> 건</span>
              </Typography>
            </Stack>
            <List>
            {list.map((item : any , i:number) => (
              <NavLink to="/ResInfoSharingDetail" 
              key={i}
              state={{ item:item ,
              total:total,
              articleSrchCd:srchCd,
              articleSrchWord:srchWord}}>
                <ListItem >
                  <ListItemText
                    secondary={
                    <React.Fragment>
                      <div className="tit_body">
                        <Typography variant="body1">
                          {item.title}
                        </Typography>
                        <Stack direction="row" className='tag' spacing={1} >
                          {/* new아이콘 24시간 이내인 경우만 */}
                          {today<item.createdDt?<Chip label="NEW" className='new' sx={{ml: 1}}/>:null}
                        </Stack>
                      </div>
                      <Typography
                        component="div"
                        variant="body2"
                        className="body2"
                        color="text.primary"
                      >
                          {item.article}....<br/>
                        </Typography>
                        <div className="date">
                          <span>조회 <em>{item.readCnt}</em></span>
                          <span><em>{dayjs(item.createdDt).format('YYYY-MM-DD')}</em></span>
                          <span>작성자 <em className="noline">{'홍길동'}</em></span>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </NavLink>
            ))}
            </List>
            {(params.itemsPerPage)<total?
            // 더보기
            <Stack css={styles.bottom_btn} >
              <CustomButton label={'더보기'} type={'full'} color={'item'} style={{ margin: '10px 0' }} onClick={()=>moreInfo()} />
            </Stack>
            :null}
            <Stack direction="row" css={styles.btnGroup}>
              <CustomButton label={'자원 정보 공유 의견 등록'} type={'wauto'} color={'primary'} style={{ marginTop: '40px', padding: '0 36px' }} onClick={goInfo} />
            </Stack>
          </div>      
        </div>
      </Box>
    </div>
  );
}

export default ResInfoSharing;
