// 공고알림/ -> 공지사항 페이지
// import React from "react"
import * as styles from './styles';
import React, { useEffect, useState,useRef  } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import dayjs from 'shared/libs/dayjs';
import { NavLink } from 'react-router-dom';
import { fetchAnnouncement} from '~/fetches';
import { CustomButton } from 'shared/components/ButtonComponents';
import BreadCrumb from '../../components/BreadCrumb';

function Announcement() {
  const today = new Date();
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
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit" style={{ marginTop: 0 }}>
                공지사항
              </h2>
              <p>
                AICA에서 진행하는 채용공고, 운영과 관련한 안내사항 등을 확인하실
                수 있습니다.
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
                    placeholder="어떤 공지사항을 찾고 계신가요?"
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
                공지사항
                <span className='data'><em>{total}</em> 건</span>
              </Typography>
            </Stack>
            <List>
            {list.map((item : any , i:number) => (
              <NavLink to="/AnnouncementDetail" 
              key={i}
              state={{ item:item ,
              total:total,
              articleSrchCd:srchCd,
              articleSrchWord:srchWord}}>
                <ListItem >
                  <ListItemText 
                    secondary={
                    <React.Fragment>
                      <span className="tit_body">
                        <Typography variant="body1" component="span">
                          {item.title}
                        </Typography>
                        <Stack direction="row" className='tag' spacing={1} component="span" >
                          {/* new아이콘 24시간 이내인 경우만 */}
                          {today<item.createdDt?<Chip label="NEW" className='new' sx={{ml: 1}}/>:null}
                        </Stack>
                      </span>
                      <Typography
                        component="span"
                        variant="body2"
                        className="body2"
                        color="text.primary"
                      >
                          {item.article}<br/>
                        </Typography>
                        <span className="date">
                          <span>조회 <em>{item.readCnt}</em></span>
                          <span><em>{dayjs(item.createdDt).format('YYYY-MM-DD')}</em></span>
                        </span>
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
          </div>      
        </div>
      </Box>
    </div>
  );
}

export default Announcement;
