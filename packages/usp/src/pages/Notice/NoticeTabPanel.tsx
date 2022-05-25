/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import {  alwaysBsnsPblan, alwaysCurrencies, alwaysPercontBox, Noticeitems, swiperParams } from "./NoticeModel";
import dayjs from 'shared/libs/dayjs';
import * as styles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import { CustomButton } from 'shared/components/ButtonComponents';

/*
    컴포넌트: NoticeTabPanel
    개발자  : navycui
    작성실  : 20220511
*/
export const NoticeTabPanel: React.FC<{
  normalDataSlice: Noticeitems[],
  totalItems:number,
  queryBox:string,
  normalData:Noticeitems[],
  closeingData: Noticeitems[],
  handlerShowMores?: (key: string) => void
  setSortOrdertab?: (key: string) => void
  setPerItemCounttab?: (key: string) => void
}> = props => {
//#region -------상태 값 초기화
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currency, setCurrency] = useState<string>('1');
  const [perCount, setPerCount] = useState<string>('1');
  const [bsnsPblan, setBsnsPblan] = useState<string>('1');

//#endregion ---- end

  // 조회 조건 변경
  const handleChangeOptions = (event: { target: { value: string } },opt:string) => {
    switch(opt) {
      case '01':
        setCurrency(event.target.value);
        if(props.setSortOrdertab) props.setSortOrdertab(event.target.value);
        break;
      case '02':  
        setBsnsPblan(event.target.value);
        if(props.setSortOrdertab) props.setSortOrdertab(event.target.value);
        break;
      default:
        setPerCount(event.target.value);
        if(props.setPerItemCounttab) props.setPerItemCounttab(event.target.value);
        break;
    }
  };

  // 더보기 조회

  const handlerShowMoresCal = () => {
    if(props.handlerShowMores) props.handlerShowMores("01");
  }
  
    return ( 
        <Box css={styles.sub_cont02}>
            <div className="content">
            <Stack
                component="div"
                spacing={6}
                direction="row"
                justifyContent="space-between"
            >
                <Typography variant="h5" component="div">
                주요공고
                <span className="data">
                    <em>{props.closeingData.length ? props.closeingData.length : 0}</em> 건
                </span>
                </Typography>
                {/* <div className="select"> */}
                <TextField select id="demo-customized-select" value={currency} onChange={(e) => handleChangeOptions(e,"01")}>
                    {alwaysCurrencies.map((option,key) => (
                    <MenuItem key={key} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                {/* </div> */}
            </Stack>
            {/* 슬라이드 */}
            <Swiper {...swiperParams} style={{ padding: '10px' }} css={styles.slide_cont02}>
                {props.closeingData.map((item,key) => (
                <SwiperSlide key={key}>
                  <NavLink to={`/NoticeDetall/${item.pblancId}/?${props.queryBox}`} state={{item:item, listItem:props.normalData,queryBox:props.queryBox}}>
                    <Card css={styles.hotslide} className="tag2">
                      <CardActionArea>
                      <Stack direction="row" className="tag" spacing={1}>
                        <Chip label={item.recomendCl.split(',')[0]} className="blue"/>
                        <Chip label={  item.rmndrDay ? '마감 D-' + item.rmndrDay  : '공고종료'  } variant="outlined" className="wh"/>
                      </Stack>
                      <CardMedia
                        component="img"
                        height="200"
                        //var publicId = "pblanc-eb9ecb4c4bcd480ea1dcf86ecc7dcd03";
                        //var url = "http://api.bnet.com/pms/api/front/bsns-pblanc/" + item. + "/thumbnail";
                        image={'/images/main/list_img01.png'}
                        alt="green iguana"
                      />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                          >
                            {item.pblancNm}
                          </Typography>
                            <p className="sub_txt">접수기간</p>
                            <p className="sub_txt">{item.rceptPd}({item.pblancSttus})</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </NavLink>
                </SwiperSlide>
                ))}
            </Swiper>
            <hr className="m20"/>
            {/* list 리스트 */}
            <div css={styles.sub_list}>
                <Stack
                spacing={6}
                direction="row"
                justifyContent="space-between"
                >
                <Typography variant="h5" component="div">
                    일반 공고
                    <span className="data">
                    <em>{props.totalItems}</em> 건
                    </span>
                </Typography>
                {isMobile ? (
                    ''
                ) : (
                    <div className="select">
                    <TextField
                        id="demo-customized-select"
                        select
                        value={bsnsPblan}
                        onChange={(e) => handleChangeOptions(e,"02")}
                    >
                        {alwaysBsnsPblan.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="demo-customized-select"
                        select
                        value={perCount}
                        onChange={(e) => handleChangeOptions(e,"03")}
                        sx={{ ml: 1 }}
                    >
                        {alwaysPercontBox.map((option,key) => (
                        <MenuItem key={key} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    </div>
                )}
                </Stack>
                <List>
                {props.normalDataSlice.map((item,keys) => (
                <NavLink key={keys} to={`/NoticeDetall/${item.pblancId}/?${props.queryBox}`} state={{item:item, listItem:props.normalDataSlice,queryBox:props.queryBox}}>
                    <ListItem>
                    <ListItemAvatar sx={{ mr: 3 }}>
                        <img src={"/images/main/list_img01.png"} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                        <React.Fragment>
                            <Stack direction="row" className='tag' spacing={1} component="span">
                            {item.isNew !== "N" ? <Chip component="span" label={"NEW"} className='new'/> : ""}
                            {item.recomendCl ? <Chip component="span" label={item.recomendCl.split(",")[0]} className='blue'/> : ""}
                            {item.rmndrDay  ? <Chip component="span" label={"마감 D-" + item.rmndrDay} variant="outlined" /> : <Chip component="span" label={"공고종료"} variant="outlined" />}
                            </Stack>
                            <Typography variant="body1" component="span">
                            {item.pblancNm}
                            </Typography>
                            <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                            >
                            {item.pblancSumry}<br/>
                            </Typography>
                            {item.pblancSttus} {dayjs(item.rceptEndde).format("YYYY-MM-DD")} | {"조회"} {item.rdcnt}

                        </React.Fragment>
                        }
                    />
                    </ListItem>
                </NavLink>
                ))}
                </List>
                {}
                {(props.totalItems > 0 && props.normalDataSlice.length < props.totalItems) 
                ? 
                <Stack css={styles.bottom_btn} >
                  <CustomButton label={'더보기'} type={'full'} color={'item'} style={{ margin: '10px 0' }} onClick={()=>handlerShowMoresCal()}/>
                </Stack>
                : ""}
              </div>      
            </div>
        </Box>
    );
}
  // Swiper   //loop : true,
  SwiperCore.use([Navigation,Autoplay,Pagination]);


     
     
     
     
     