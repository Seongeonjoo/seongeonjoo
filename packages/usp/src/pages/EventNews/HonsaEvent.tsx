// 참여이벤트/ ->  행사/이벤트 페이지
// import React from "react"
import * as styles from '../Notice/styles';
import BreadCrumb from '~/components/BreadCrumb';
import Box from '@mui/material/Box';
import { Autocomplete, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, TextField, Modal, useMediaQuery } from '@mui/material';
import {Noticeitems, CodeType} from "../Notice/NoticeModel";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import {useTheme } from '@mui/material';
import { CustomButton} from 'shared/components/ButtonComponents';
import { DateIcon } from 'shared/components/IconComponents';
import { NavLink } from 'react-router-dom';
import { fetchAnnouncement } from '~/fetches';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CloseIcon from '@mui/icons-material/Close';

function HonsaEvent(){
  const [assign_box, setAssign_box] = useState<CodeType[]>([]);
  const theme = useTheme();
  const [list, setList] = useState<Noticeitems[]>([]);
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value1, setValue1] = React.useState<Date | null>(
    new Date('2022-05-18'),
  );
  
  const [value2, setValue2] = React.useState<Date | null>(
    new Date('2022-05-18'),
  );

  const [params, setParams] = useState({
    posting : true,
    articleSrchCd : "",
    articleSrchWord : "",
    page : 1,
    itemsPerPage : 10,
  })

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

  // datepicker 영역
  const handleChange1 = (newValue1: Date | null) => {
    setValue1(newValue1);
  };
  const handleChange2 = (newValue2: Date | null) => {
    setValue2(newValue2);
  };
  // 검색바 영역
  function SearchBar() {
    return(
      <Stack direction="row" css={styles.input_w}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={assign_box.map((option) => option.codeNm)}
          renderInput={(params) => (
            <TextField
              autoFocus
              placeholder="어떤 행사/이벤트를 찾고계신가요?"
              {...params}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <Button
          variant="contained"
          className="search_btn"
        >
          검색
        </Button>
      </Stack>
    );
  }

// 달력부분
  function DatePicker() {
    return(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ maxWidth: 360 }}>
          <DesktopDatePicker
            inputFormat={"yyyy-MM-dd"}
            mask={"____-__-__"}
            value={value1}
            onChange={handleChange1}
            renderInput={(params) => <TextField {...params} />}
            components={{
              OpenPickerIcon: DateIcon
            }}
          />
          <div>~</div>
          <DesktopDatePicker
            inputFormat={"yyyy-MM-dd"}
            mask={"____-__-__"}
            value={value2}
            onChange={handleChange2}
            renderInput={(params) => <TextField {...params} />}
            components={{
              OpenPickerIcon: DateIcon
            }}
          />
        </Stack>
      </LocalizationProvider>
    );
  }

  //모델부분
  function SearchModal() {
    // 모델창 열기
    const openModal = () => {
      setModalOpen(true);
    };
    // 모델창 닫기
    const closeModal = () => {
      setModalOpen(false);
    };
    return(
      <div css={styles.detal_btn}>
        <Button type="button" onClick={openModal}>
          상세조건 열기
        </Button>
        <Modal
          keepMounted
          open={modalOpen}
          onClose={closeModal}
        >
          <Box css={styles.modalpop}>
            <Typography id="keep-mounted-modal-title" component="h2">
              사유 확인
              <Button type="button" onClick={closeModal}>
                <CloseIcon />
              </Button>
            </Typography>
            <Box css={styles.picker_card} sx={{ mb: 5 }}>
              <dl>
                <dt>검색 기간</dt>
                <dd>
                  <DatePicker/>
                </dd>
              </dl>
            </Box>
            <CustomButton
              label={'저장'}
              type={'full'}
              color={'primary'}
              onClick={closeModal}
            />
          </Box>
        </Modal>    
      </div>
    );
  }
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">행사/이벤트</h2>
              <p>
                AICA 및 연계기관들이 주관 및 주최하는 각종 행사와 캠페인 소식들을 확인하실 수 있습니다.
              </p>
            </div>
            <SearchBar />
            {isMobile ? (
              <SearchModal/>
            ) : (
            <Box css={styles.picker_card}>
              <dl>
                <dt>검색 기간</dt>
                <dd>
                  <DatePicker/>
                </dd>
              </dl>
            </Box>
            )}
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
          <div className="content">
            <Stack
              component="div"
              spacing={6}
              direction="row"
              justifyContent="space-between"
            >
              <Typography variant="h5" component="div">
              행사/이벤트
              <span className="data">
                <em>{total}</em> 건
              </span>
              </Typography>
            </Stack>
            {/* list 리스트 */}
            <div css={styles.event_list}>
              {list.map((item, keys) => (
              <NavLink key={keys} to={`/HonsaEventDetail`} state={{item:item,total:total}} >
                  <Card className="tag2">
                    <CardActionArea>
                    <Stack direction="row" className="tag" spacing={1}>
                      <Chip label={'진행중'} className="blue"/>
                    </Stack>
                    <CardMedia
                      component="img"
                      height="200"
                      image={'/images/main/list_img01.png'}
                      alt="green iguana"
                    />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                        >
                          {'기술혁신형 중소기업에 날개를 달다! 이노비즈 인증 기술혁신형 중소기업에 날개를 달다!'}
                        </Typography>
                        <div className="date">
                          <span>진행기간 <em>{'2021-11-21 ~ 2021-12-11 18:00'}</em></span>
                        </div>
                        <div className="date">
                          <span>조회 <em>{'0'}</em></span>
                          <span>작성일 <em>{'2021-05-18'}</em></span>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </NavLink>
                ))}
              </div>  
              {(params.itemsPerPage)<total? 
              <Stack css={styles.bottom_btn} >
                <CustomButton label={'더보기'} type={'full'} color={'item'} style={{ margin: '10px 0' }} onClick={()=>moreInfo()}/>
              </Stack>
              : null}
                  
            </div>
        </Box>
    </div>
  );
}

export default HonsaEvent;
