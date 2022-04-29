// 공고알림/ -> 선정 결과 공고 페이지
// import React from "react"
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation,Autoplay,Pagination } from 'swiper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchNotice, fetchNoticeCloseing } from '~/fetches';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function AnnouncementSelectionRes() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }
  const breadcrumbs = [
    <Link underline="hover" className="home" key="1" color="#fff" href="/" onClick={handleClick}>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#fff"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      공고알림
    </Link>,
    <Typography key="3" color="#fff">
      선정결과 공고
    </Typography>,
  ];
  const listData = [
    {
      img: '/images/main/list_img01.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
    {
      img: '/images/main/list_img02.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
    {
      img: '/images/main/list_img03.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
  ];
  const top100Films = [{ title: '정시모집'},{ title: '상시모집'},{ title: '창업교육' },{ title: '시설/공간/보육'}]
  return (
    <div css={styles.container}>
      <CssBaseline />
        <Box css={styles.sub_cont01}>
          <div className="benner">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              css={styles.bread}
            >
              {breadcrumbs}
            </Breadcrumbs>
            <div className="content">
              <div className='txtbox'> 
                <h2 className="tit" style={{ marginTop: 0 }}>선정결과공고</h2>
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
                      placeholder="어떤 선정 결과 공고를 찾고계신가요?"
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                  )}
                />
                <Button variant="contained" className="search_btn">검색</Button>
              </Stack>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          {/* list 리스트 */}
          <div css={styles.sub_list}>
            <Stack spacing={6} direction="row" justifyContent="space-between">
              <Typography variant="h5" component="div">
                선정결과 공고
                <span className='data'><em>12</em> 건</span>
              </Typography>
            </Stack>
            <List>
            {listData.map((item) => (
              <ListItem key={item.img}>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="body1">
                        {item.title}
                      </Typography>
                      <Typography
                        component="div"
                        variant="body2"
                        className="body2"
                        color="text.primary"
                      >
                        인공지능산업융합사업단에서는 인공지능 중심 산업융합 집적단지 조성사업의 일환으로 AI 직무능력 고도화 및 문제해결 능력을 갖춘 AI 실무인재 육성을 인공지능산업융합사업단에서는 인공지능 중심 산업융합 집적단지 조성사업의 일환으로 AI 직무능력 고도화 및 문제해결 능력을 갖춘 AI 실무인재  육…<br/>
                      </Typography>
                      <span className="body3">모집종료 <em>2021-11-21</em> 조회 <em>169</em></span>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
            </List>
            <Button variant="contained" fullWidth className="bottom_btn">더보기</Button>
          </div>      
        </div>
      </Box>
    </div>
  );
}

export default AnnouncementSelectionRes;
