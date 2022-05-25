// 이용지원/ ->  자료실 페이지
import React, { useEffect, useState,useRef  } from 'react';
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {fetchReferenceRoom} from '~/fetches';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import dayjs from 'shared/libs/dayjs';
import { NavLink } from 'react-router-dom';

function ReferenceRoom() {
  const today = new Date();
  today.setHours(today.getHours()-24);
  const searchInput:any = useRef("");
  const [params, setParams] = useState({
    categoryCd : "",
    articleSrchCd : "",
    articleSrchWord : "",
    page : 1,
    itemsPerPage : 10,
  })
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [articleSrchCd, setArticleSrchCd] = useState("");
  const [articleSrchWord, setArticleSrchWord] = useState("");
  const [categoryCd, setCategoryCd] = useState("");

  useEffect(() => {
    setArticleSrchCd(params.articleSrchCd)
    setArticleSrchWord(params.articleSrchWord)
  },[params.articleSrchCd,params.articleSrchWord])
  //처음 세팅
  const getList = () =>{
    fetchReferenceRoom(params).then((res:any) => {
      setList(res.list);
      setTotal(res.totalItems);
    })
  }

  useEffect(()=>{
    getList()
  },[params])

  const moreInfo = () =>{
    const itemsPerPage:any = params.itemsPerPage +10;
    setParams((state)=>({...state,itemsPerPage}));
  }

  const Search = () =>{
    const value = searchInput.current.value;
    if(value !== ""){
      setParams({...params,itemsPerPage:10,categoryCd : categoryCd, articleSrchCd : articleSrchCd, articleSrchWord : value});
    }else{
      setParams({...params,itemsPerPage:10,categoryCd : categoryCd, articleSrchCd : articleSrchCd, articleSrchWord : ""});
    }
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
  
  const changeCategoryCd = (event: SelectChangeEvent) => {
    setCategoryCd(event.target.value);
  };

  const changeArticleSrchCd = (event: SelectChangeEvent) => {
    setArticleSrchCd(event.target.value);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs"  css={styles.container}>
        <CssBaseline />
        <h1>자료실</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          // value = {categoryCd}
          onChange={changeCategoryCd}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>전체</em>
          </MenuItem>

        </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value = {articleSrchCd}
          onChange={changeArticleSrchCd}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="ALL">전체</MenuItem>
          <MenuItem value="TITLE">제목</MenuItem>
          <MenuItem value="CONTENT">내용</MenuItem>
        </Select>
        </FormControl>
        <TextField 
        id="standard-basic" 
        label="Standard" 
        variant="standard" 
        inputRef={searchInput}
        onKeyPress={onKeyPress}
        />

              <Button 
              variant="contained" 
              className="search_btn"
              onClick={handleClickSearch}
              >검색</Button>
      </Container>
      <Box>
        <div className="content">
          {/* 상세 list 리스트 */}
          <div>
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
              <NavLink to="/ReferenceRoomDetail" 
              key={i}
              state={{ item:item ,
              total:total,
              articleSrchCd:articleSrchCd,
              articleSrchWord:articleSrchWord}}>
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
                          {item.article}<br/>
                        </Typography>
                        <div className="date">
                          <span>조회 <em>{item.readCnt}</em></span>
                          <span><em>{dayjs(item.createdDt).format('YYYY-MM-DD')}</em></span>
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
            <Button variant="contained" fullWidth className="bottom_btn"  onClick={()=>moreInfo()}>더보기</Button>
                :null}
          </div>      
        </div>
      </Box>
    </div>

  );
}

export default ReferenceRoom;
