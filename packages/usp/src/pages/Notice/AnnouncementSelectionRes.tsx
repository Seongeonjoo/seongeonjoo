// 공고알림/ -> 선정 결과 공고 페이지
// import React from "react"
import * as styles from './styles';
/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import BreadCrumb from '../../components/BreadCrumb';
import { NavLink } from 'react-router-dom';
import fetchAnnouncementSelectionRes from '~/fetches/fetchAnnouncementSelectionRes';

function AnnouncementSelectionRes() {
  const searchInput:any = useRef("");
  const [params, setParams] = useState({
    slctnPblancNm : "",
    page : 1,
    itemsPerPage : 10,
  })
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  //처음 세팅
  const getList = () => {
    fetchAnnouncementSelectionRes(params).then((res:any) => {
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
      setParams({...params,itemsPerPage:10, slctnPblancNm : value});
    }else{
      setParams({...params,itemsPerPage:10,slctnPblancNm  : ""});
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
              <h2 className="tit">선정결과공고</h2>
              <p>지원하신 사업에 대한 선정결과를 확인하실 수 있습니다.</p>
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
                    placeholder="어떤 선정 결과 공고를 찾고계신가요?"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                    onKeyPress={onKeyPress}
                  />
                )}
              />
              <Button variant="contained" className="search_btn" onClick={handleClickSearch}>검색</Button>
            </Stack>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          {/* 상세 list 리스트 */}
          <div css={styles.detal_list}>
            <Stack spacing={6} direction="row" className="sub_tit" justifyContent="space-between">
              <Typography variant="h4" component="div">
                선정 결과 공고
                <span className='data'><em>{total}</em> 건</span>
              </Typography>
            </Stack>
            <List>
            {list.map((item : any , i:number) => (
              <NavLink to="/AnnouncementSelectionResDetail" 
              key={i}
              state={{ slctnPblancId:item.slctnPblancId ,
              }}>
                <ListItem >
                  <ListItemText
                    secondary={
                    <React.Fragment>
                      <span className="tit_body" >
                        <Typography variant="body1" component="span">
                          {item.slctnPblancNm}
                        </Typography>
                        <Stack direction="row" className='tag' spacing={1} component="span">
                          {item.isNew=="Y"?<Chip label="NEW" className='new' sx={{ml: 1}}/>:null}
                        </Stack>
                      </span>
                      <Typography
                        component="span"
                        variant="body2"
                        className="body2"
                        color="text.primary"
                      >
                          {item.slctnPblancSumry}<br/>
                        </Typography>
                        <span className="body3">관련 모집공고 <em>{item.pblancNm}</em></span>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </NavLink>
            ))}
            </List>
            {(params.itemsPerPage)<total?
            <Button variant="contained" fullWidth className="bottom_btn"  onClick={()=>moreInfo()}>더보기</Button>
                :null}
          </div>      
        </div>
      </Box>
    </div>
  );
}

export default AnnouncementSelectionRes;
