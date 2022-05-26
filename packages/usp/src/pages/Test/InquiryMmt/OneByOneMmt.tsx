// 문의관리 -> 1:1문의 목록
// import React from "react"
import * as styles from '../../Notice/styles';
import BreadCrumb from '~/components/BreadCrumb';
import Box from '@mui/material/Box';
import { Autocomplete, Button, Chip, Stack, TextField, Modal, useMediaQuery, List, ListItem, ListItemText } from '@mui/material';
import {Noticeitems, CodeType} from "../../Notice/NoticeModel";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import {useTheme } from '@mui/material';
import { CustomButton, CustomCheckBoxs } from 'shared/components/ButtonComponents';
import { DateIcon } from 'shared/components/IconComponents';
import { NavLink } from 'react-router-dom';
import { fetchAnnouncement } from '~/fetches';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import { infoState } from '~/pages/Temp/DummyData';

function OneByOneMmt(){
  const today = new Date();
  today.setHours(today.getHours()-24);
  const [assign_box, setAssign_box] = useState<CodeType[]>([]);
  const theme = useTheme();
  const [list, setList] = useState<Noticeitems[]>([]);
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value1, setValue1] = React.useState<Date | null>(new Date('2022-05-18'));
  const [value2, setValue2] = React.useState<Date | null>(new Date('2022-05-18'));
  const [srchCd, setSrchCd] = useState("");
  const [srchWord, setSrchWord] = useState("")

  useEffect(() => {
    setSrchCd(params.articleSrchCd)
    setSrchWord(params.articleSrchWord)
  })

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
              placeholder="1:1문의를 확인해보세요!"
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
        <Stack direction="row" alignItems="center" spacing={2} sx={{ maxWidth: 360, margin:'0 auto' }}>
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
            <Box css={styles.picker_card}>
              <dl>
                <dt>접수일</dt>
                <dd>
                  <DatePicker/>
                </dd>
              </dl>
              <dl>
                <dt>상태</dt>
                <dd>
                <CustomCheckBoxs
                  row
                  checkbox={infoState}
                  onClick={(s: string[]) => {
                    if (s.length > 0) console.log(s);
                  }}
                />
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
              <h2 className="tit">1:1문의 관리</h2>
              <p>
                AICA에서 운영 및 지원하는 사업과 시설 전반에 대해 문의하신 목록과 답변을 확인하실 수 있습니다.
              </p>
            </div>
            <SearchBar />
            {isMobile ? (
              <SearchModal/>
            ) : (
            <Box css={styles.picker_card}>
              <dl>
                <dt>접수일</dt>
                <dd>
                  <DatePicker/>
                </dd>
              </dl>
              <dl>
                <dt>상태</dt>
                <dd>
                <CustomCheckBoxs
                  row
                  checkbox={infoState}
                  onClick={(s: string[]) => {
                    if (s.length > 0) console.log(s);
                  }}
                />
                </dd>
              </dl>
            </Box>
            )}
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          <div css={styles.detal_list}>
            <Stack
              spacing={6}
              direction="row"
              className="sub_tit"
              justifyContent="space-between"
            >
              <Typography variant="h4" component="div">
                1:1문의
                <span className='data'><em>{total}</em> 건</span>
              </Typography>
            </Stack>
            <List>
            {list.map((item : any , i:number) => (
              <NavLink to="/OneByOneMmtDetail" 
              key={i}
              state={{ item:item ,
              total:total,
              articleSrchCd:srchCd,
              articleSrchWord:srchWord}}>
                <ListItem>
                  <ListItemText 
                    secondary={
                    <React.Fragment>
                      <span className="tit_body">
                        <Stack direction="row" className='tag' spacing={1} component="span">
                          <Chip label="지원/신청" className='item' sx={{mr: 1}}/>
                        </Stack>
                        <Typography variant="body1" component="span">
                          {item.title}
                        </Typography>
                      </span>
                      <span className="date">
                        <span>접수일 <em>{dayjs(item.createdDt).format('YYYY-MM-DD')}</em></span>
                      </span>
                      <span className="right_tag">
                        <em>답변완료</em>
                      </span>
                      {/* 클래스만 변동 */}
                      {/* <em className="blue">접수</em> 
                      <em className="green">반려</em> */}
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

export default OneByOneMmt;
