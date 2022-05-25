/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect,useRef } from 'react';
import {TabPanelProps , Noticeitems ,CodeType, groupId,imsiBox} from "./NoticeModel";
import * as styles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import { fetchNotice, fetchNoticeCloseing, fetchGetCommCode } from '~/fetches';
import BreadCrumb from '~/components/BreadCrumb';
import { NoticeTabPanel } from './NoticeTabPanel';
import { NoticeTabPanelontime } from './NoticeTabPanelontime';
import { CustomRadioButtons} from 'shared/components/ButtonComponents';
import { CustomCheckBoxs } from '~/components/NoticeCustomCheckBoxs';
/* 
  작성일    :   2022/04/21
  화면명    :   공고알림 -> 모집공고
  화면/개발 :   Seongeonjoo / navycui
*/
function Notice() {
  //#region -------상태 값 초기화
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [assign_box, setAssign_box] = useState<CodeType[]>([]);
  const searchInput: any = useRef('');

  const [value, setValue] = useState(0);
  const [pblancSttusCd, setPblancSttusCd] = useState<CodeType[]>([]);
  const [applyMberTypeCd, setApplyMberTypeCd] = useState<CodeType[]>([]);
  const [recomendClCd, setRecomendClCd] = useState<CodeType[]>([]);

  const [totalItems, setTotalItems] = useState(0);
  const [totalItems1, setTotalItems1] = useState(0);

  const [normalData, setNormalData] = useState<Noticeitems[]>([]);
  const [normalDataOntime, setNormalDataOntime] = useState<Noticeitems[]>([]);
  const [normalDataSlice, setNormalDataSlice] = useState<Noticeitems[]>([]);
  const [normalDataSliceOntime, setNormalDataSliceOntime] = useState<Noticeitems[]>([]);

  const [closeingData, setCloseingData] = useState<Noticeitems[]>([]);
  const [closeingDataOntime, setCloseingDataOntime] = useState<Noticeitems[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>('1');
  const [PerItemCount, setPerItemCount] = useState<string>('1');
  const [queryBox, setQueryBox] = useState<string>('');

  const [checked, setChecked] = useState(true);

  const [pblancSttus, setPpblancSttus] = useState<string[]>([]);
  const [recomendcl, setRecomendcl] = useState<string[]>([]);
  const [memberType, setMemberType] = useState<string[]>([]);

  // const [pagination, setPagination] = useState({ page: 0, pageSize: 3, rowCount: 0,});
  //#endregion ---- end

  //#region ------- 함수 영역REACT_APP_TEST
  // 화면 초기화
  const init = () => {
    getSearchCategory(); // 검색 구분 조회
    getCommCode(groupId); // 모집대상,모집상태,사업분야 코드 조회

    getNoticeCloseingList('?ordtmRcrit=false&sortOrder=pblancDay'); // 주요 공고 조회
    getNoticeList('?ordtmRcrit=false&sortOrder=pblancDay'); // 일반 공고 조회
  };

  // 정시 주요공고 건색 조건 변경시
  const currencySelect = () => {
    handleClickSearch();
  };

  // 화면 초기 렌드링 실행
  useEffect(init, []);

  // 조회 조건 변경시
  useEffect(currencySelect, [sortOrder, PerItemCount]);

  // 공통코드 조회
  const getCommCode = (groupId: string[]) => {
    groupId.forEach((element) => {
      fetchGetCommCode(element)
        .then((res) => {
          if (element === 'PBLANC_STTUS') {
            setPblancSttusCd(res);
          } else if (element === 'MEMBER_TYPE') {
            setApplyMberTypeCd(res);
          } else {
            setRecomendClCd(res.filter((val: any) => val.codeType === 'BSR'));
          }
        })
        .catch((e) => {
          console.log('%c getCommCode[공통코드 조회]' + e,);
        });
    });
  };

  // 검색 구분 조회
  const getSearchCategory = async () => {
    const box = await Promise.all([ fetchGetCommCode('PBLANC_STTUS'), fetchGetCommCode('MEMBER_TYPE'), fetchGetCommCode('RECOMEND_CL')]);
    const box3 = box[0].concat(box[1]).concat(box[2].filter((v: any) => v.codeType === 'BSR'));
    setAssign_box(imsiBox.concat(box3));
  };

  // 주요 조회
  const getNoticeCloseingList = (param: string) => {
    setQueryBox(param.split('?')[1]);
    // 주요공고
    fetchNoticeCloseing(param)
      .then((res) => {
        if (checked) {
          console.log('fetchNoticeCloseing:: true', checked);
          setCloseingDataOntime([]);
          setCloseingData(res.data);
          setValue(0);
        } else {
          console.log('fetchNoticeCloseing:: false', checked);
          setCloseingData([]);
          setCloseingDataOntime(res.data);
          setValue(1);
        }
      })
      .catch((e) => {
        console.log('%c erorr' + e);
      });
      
  };

  // 일반 조회
  const getNoticeList = (param: string) => {
    setQueryBox(param.split('?')[1]);
    // 일반공고
    fetchNotice(param)
      .then((res) => {
        const {
          data: { list, totalItems },
        } = res;
        if (checked) {
          console.log('fetchNotice:: true', checked);
          setNormalDataOntime([]);
          setTotalItems1(0);
          setNormalDataSlice(list.slice(0, 3));
          setNormalData(list);
          setTotalItems(totalItems);
          setValue(0);
        } else {
          console.log('fetchNotice:: false', checked);
          setNormalData([]);
          setNormalDataSlice([]);
          setTotalItems(0);
          setNormalDataSliceOntime(list.slice(0, 1));
          setNormalDataOntime(list);
          setTotalItems1(totalItems);
          setValue(1);
        }
      })
      .catch((e) => {
        console.log('erorr:' + e);
      });
  };

  // 검색 버튼
  const handleClickSearch = (event?: React.SyntheticEvent) => {
    // 검색구분 선택시
    if (searchInput.current.value !== '') {
      assign_box.forEach((element) => {
        if (element.codeNm === searchInput.current.value) {
          if (element.codeGroup === 'PBLANC_STTUS') {
            getNoticeList(`?ordtmRcrit=${checked}&pblancSttus=${element.code}&sortOrder=${sortOrder}`);
            getNoticeCloseingList(`?ordtmRcrit=${checked}&pblancSttus=${element.code}&sortOrder=${sortOrder}`);
          } else if (element.codeGroup === 'MEMBER_TYPE') {
            getNoticeList(`?ordtmRcrit=${checked}&applyMberType=${element.code}&sortOrder=${sortOrder}`);
            getNoticeCloseingList(`?ordtmRcrit=${checked}&applyMberType=${element.code}&sortOrder=${sortOrder}`);
          } else if (element.codeGroup === 'RECOMEND_CL') {
            getNoticeList(`?ordtmRcrit=${checked}&recomendCl=${element.code}&sortOrder=${sortOrder}`);
            getNoticeCloseingList(`?ordtmRcrit=${checked}&recomendCl=${element.code}&sortOrder=${sortOrder}`);
          } else {
            if (searchInput.current.value === '정시모집') {
              getNoticeList(`?ordtmRcrit=${checked}&sortOrder=${sortOrder}`);
              getNoticeCloseingList(`?ordtmRcrit=${checked}&sortOrder=${sortOrder}`);
            } else {
              getNoticeList(`?ordtmRcrit=${checked}&sortOrder=${sortOrder}`);
              getNoticeCloseingList(`?ordtmRcrit=${checked}&sortOrder=${sortOrder}`);
            }
          }
        }
      });
      return;
    }
    // 검색구분 체크시
    let params = '?ordtmRcrit=' + !checked; // 공고 구분
    params += '&pblancSttus=' + pblancSttus.toString();  // 모집상태
    params += '&applyMberType=' + memberType.toString(); // 모집대상
    params += '&recomendCl=' + recomendcl.toString();    // 사업분야
  
    if (sortOrder === '1') {
      params += '&sortOrder=pblancDay';
    } else if (sortOrder === '2') {
      params += '&sortOrder=close';
    } else {
      params += '&sortOrder=rdcnt';
    }
    if (PerItemCount === '1') {
      params += '&itemsPerPage=10';
    } else if (PerItemCount === '2') {
      params += '&itemsPerPage=20';
    } else {
      params += '&itemsPerPage=30';
    }
    getNoticeCloseingList(params); // true: 상시 false: 정시
    getNoticeList(params);
  };
  // 탭 변경
  const handleChangeTap = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  // 모델창 열기
  const openModal = () => {
    setModalOpen(true);
  };
  // 모델창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  //#endregion ---- end
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit" style={{ marginTop: 0 }}>
                모집공고
              </h2>
              <p>
                AICA에서 진행하는 사업 공고를 확인하고 신청할 수 있습니다.
                <br /> 사업 신청 전에 신청 대상, 사전준비자료, 사업안내서 등을
                충분히 숙지하시고 신청을 진행하시기 바랍니다.
              </p>
            </div>
            <Stack direction="row" css={styles.input_w}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={assign_box.map((option) => option.codeNm)}
                renderInput={(params) => (
                  <TextField
                    autoFocus
                    inputRef={searchInput}
                    placeholder="어떤 공고를 찾고계신가요?"
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
                onClick={handleClickSearch}
              >
                검색
              </Button>
            </Stack>
            {/* 상세조건 pc인 경우 테이블 */}
            {isMobile ? (
              <div css={styles.detal_btn}>
                <Button type="button" onClick={openModal}>
                  상세조건 열기
                </Button>
              </div>
            ) : (
              <Box css={styles.teble_detal}>
                <Box component={Paper} css={styles.table02}>
                  <dl>
                    <dt>공고 구분</dt>
                    <dd>
                    <CustomRadioButtons
                      data={['정시모집', '상시모집']}
                      onClick={(selected) => {
                        if (selected === '상시모집') {
                          setChecked(true);
                        } else {
                          setChecked(false);
                        }
                      }}
                    />
                    </dd>
                  </dl>
                  <dl>
                    <dt>모집상태</dt>
                    <dd>
                    <CustomCheckBoxs
                      row
                      checkbox={pblancSttusCd}
                      onClick={(s: string[]) => {setPpblancSttus(s);}}/>
                    </dd>
                  </dl>
                  <dl aria-label="simple table">
                    <dt>모집대상</dt>
                    <dd>
                    <CustomCheckBoxs
                      row
                      checkbox={applyMberTypeCd}
                      onClick={(s: string[]) => {setMemberType(s);}}/>
                    </dd>
                  </dl>
                  <dl aria-label="simple table">
                    <dt>사업분야</dt>
                    <dd>
                    <CustomCheckBoxs
                      row
                      checkbox={recomendClCd}
                      onClick={(s: string[]) => {
                        setRecomendcl(s);
                      }}
                    />
                    </dd>
                  </dl>
                </Box>
              </Box>
            )}
            {/* 상세조건 mobile 인경우 모달 팝업 */}
            <Modal
              keepMounted
              open={modalOpen}
              onClose={closeModal}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box css={styles.modalpop}>
                <Typography id="keep-mounted-modal-title" component="h2">
                  사유 확인
                  <Button type="button" onClick={closeModal}>
                    <CloseIcon />
                  </Button>
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography id="keep-mounted-modal-title" component="h3">
                    공고 구분
                  </Typography>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">정시 모집</Button>
                    <Button variant="outlined">상시 모집</Button>
                  </Stack>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography id="keep-mounted-modal-title" component="h3">
                    모집 상태
                  </Typography>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">상시 모집</Button>
                    <Button variant="outlined">상시 모집</Button>
                  </Stack>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography id="keep-mounted-modal-title" component="h3">
                    모집 대상
                  </Typography>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">s</Button>
                    <Button variant="outlined">상시 모집</Button>
                  </Stack>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography id="keep-mounted-modal-title" component="h3">
                    사업 분야
                    <FormControlLabel control={<Checkbox />} label="전체" />
                  </Typography>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">정시 모집</Button>
                    <Button variant="outlined">상시 모집</Button>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">정시 모집</Button>
                    <Button variant="outlined">상시 모집</Button>
                  </Stack>
                  <Stack
                    spacing={2}
                    direction="row"
                    css={styles.btnGroup}
                    sx={{ mt: 2 }}
                  >
                    <Button variant="outlined">정시 모집</Button>
                  </Stack>
                </Box>
                <Stack
                  spacing={2}
                  direction="row"
                  css={styles.btnGroup}
                  sx={{ mt: 6 }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    type="button"
                    className="blue"
                    onClick={closeModal}
                  >
                    저장
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </div>
        </div>
      </Box>
      {/* 탭 영역 시작*/}
      <Box sx={{ width: '100%' }} css={styles.detal_tab}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChangeTap}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <>
                  <span>{'정시모집'}</span>
                  <em>{'(' + ((totalItems ? totalItems : 0) +
                  (closeingData ? closeingData.length : 0)) + ')'}</em>
                </>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <>
                  <span>{'상시모집'}</span>
                  <em>{'(' + ((totalItems1 ? totalItems1 : 0) +
                  (closeingDataOntime ? closeingDataOntime.length : 0)) + ')'}</em>
                </>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        {/* 정시모집 */}
        <TabPanel value={value} index={0}>
          <NoticeTabPanel 
            normalDataSlice={normalDataSlice}
            totalItems={totalItems}
            queryBox={queryBox}
            normalData={normalData}
            closeingData={closeingData}
            handlerShowMores={(key: string) => {
              const cntbox = normalDataSlice.length;
              setNormalDataSlice(normalData.slice(0,(cntbox + 1)))
            }}
            setSortOrdertab={(opt: string)=>{
              setSortOrder(opt)
            }}
            setPerItemCounttab={(cnt: string)=>{
              setPerItemCount(cnt)
            }}
            />
        </TabPanel>
        {/* 상시모집 */}
        <TabPanel value={value} index={1}>
          <NoticeTabPanelontime
            normalDataSliceOntime={normalDataSliceOntime}
            totalItems={totalItems1}
            queryBox={queryBox}
            normalDataOntime={normalDataOntime}
            closeingDataOntime={closeingDataOntime}
            handlerShowMores={(key: string) => {
              const cntbox = normalDataSliceOntime.length;
              setNormalDataSliceOntime(normalDataOntime.slice(0,(cntbox + 1)))
            }}
            setSortOrdertab={(opt: string)=>{
              setSortOrder(opt)
            }}
            setPerItemCounttab={(cnt: string)=>{
              setPerItemCount(cnt)
            }}
          />
        </TabPanel>
      </Box>
      {/* 탭 영역 종료*/}
      <Box sx={{ m: 50 }}></Box>
    </div>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Notice;
