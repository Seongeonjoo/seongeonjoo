/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import * as styles from './styles';
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
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaQuery from '@mui/material/useMediaQuery';

// 데이터작업은 임시입니다.

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
          <Typography>{children}</Typography>
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

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

function Notice() {
  const [value, setValue] = React.useState(0);
  const [tableOpen, setTableOpen] = useState(false);

  const openTable = () => {
    setTableOpen(true);
  };
  const closeTable = () => {
    setTableOpen(false);
  };

  const handleChangeTap = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const top100Films = [
    { title: '정시모집' },
    { title: '상시모집' },
    { title: '창업교육' },
    { title: '시설/공간/보육' },
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('a', 1, 0, 24, 4.0),
    createData('b', 2, 0, 37, 4.3),
    createData('c', 3, 0, 24, 6.0),
    createData('d', 4, 0, 67, 4.3),
  ];

  const breadcrumbs = [
    <Link
      underline="hover"
      className="home"
      key="1"
      color="#fff"
      href="/"
      onClick={handleClick}
    ></Link>,
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
      모집공고
    </Typography>,
  ];
  // 선택박스
  const currencies = [
    { value: '1', label: '최신순' },
    { value: '2', label: '인기순' },
  ];
  const count = [
    { value: '1', label: '10개씩' },
    { value: '2', label: '20개씩' },
    { value: '3', label: '30개씩' },
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

  const swiperData = [
    {
      img: '/images/main/cont02_01.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
    {
      img: '/images/main/cont02_02.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
    {
      img: '/images/main/cont02_03.png',
      title: '2021년도 글로벌 AI 제품·서비스고도화 지원기업 모집공고',
    },
  ];

  const [currency, setCurrency] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  // Swiper
  SwiperCore.use([Navigation, Autoplay, Pagination]);
  // const [swiper, setSwiper] = useState(null);
  const swiperParams = {
    navigation: true,
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    pagination: true,
    breakpoints: {
      // 반응형
      1280: {
        // 테블릿
        slidesPerView: 4,
      },
      760: {
        slidesPerView: 2.5,
      },
      320: {
        slidesPerView: 1.5,
      },
    },
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const init = () => {
    return () => {};
  };
  useEffect(init, []);
  return (
    <div css={styles.container}>
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
            <div className="txtbox">
              <h2 className="tit">모집공고</h2>
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
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    placeholder="어떤 공고를 찾고계신가요?"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              <Button variant="contained" className="search_btn">
                검색
              </Button>
            </Stack>
            {/* 상세조건 테이블 */}
            {/* 
            <div css={styles.teble_detal}>
              <TableContainer component={Paper} css={styles.table}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">공고 구분</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell component="th" scope="row">
                          <Checkbox {...label} />{row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">모집상태</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell align="left"><Checkbox {...label} />{row.calories}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">모집대상</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell align="left"><Checkbox {...label} />{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">사업분야</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                      >
                        <TableCell align="left"><Checkbox {...label} />{row.carbs}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div> 
             */}
            <div css={styles.detal_btn}>
              <Button type="button" onClick={isMobile ? openModal : openTable}>
                상세조건 열기
              </Button>
            </div>
            {/* 모달 팝업부분 */}
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
      <Box sx={{ width: '100%' }} css={styles.detal_tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChangeTap}
            aria-label="basic tabs example"
          >
            <Tab label="정시모집(12)" {...a11yProps(0)} />
            <Tab label="상시모집(12)" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box css={styles.sub_cont02}>
            <div className="content">
              <Stack spacing={6} direction="row" justifyContent="space-between">
                <Typography variant="h5" component="div">
                  주요공고
                  <span className="data">
                    <em>12</em> 건
                  </span>
                </Typography>
                <div className="select">
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Stack>
              {/* 슬라이드 */}
              <Box css={styles.slide_cont02}>
                <Swiper {...swiperParams}>
                  {swiperData.map((item) => (
                    <SwiperSlide key={item.img}>
                      <Card css={styles.hotslide}>
                        <CardActionArea>
                          <Stack direction="row" className="tag" spacing={1}>
                            <Chip label="사업화" className="blue" />
                            <Chip
                              label="마감 D-30"
                              variant="outlined"
                              className="wh"
                            />
                          </Stack>
                          <CardMedia
                            component="img"
                            height="200"
                            image={item.img}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              className="black"
                            >
                              2021년도 글로벌 AI제품&middot;서비스
                              <br />
                              고도화 지원기업 모집공고
                            </Typography>
                            <p className="sub_txt">접수기간</p>
                            <p className="sub_txt">
                              2021-11-21~2021-12-11 18:00(모집중)
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
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
                      <em>12</em> 건
                    </span>
                  </Typography>
                  {isMobile ? (
                    ''
                  ) : (
                    <div className="select">
                      <TextField
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        sx={{ ml: 1 }}
                      >
                        {count.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  )}
                </Stack>
                <List>
                  {listData.map((item) => (
                    <ListItem key={item.img}>
                      <ListItemAvatar sx={{ mr: 3 }}>
                        <img src={`${item.img}`} />
                      </ListItemAvatar>
                      <ListItemText
                        secondary={
                          <React.Fragment>
                            <Stack direction="row" className="tag" spacing={1}>
                              <Chip label="NEW" className="new" />
                              <Chip label="사업화" className="blue" />
                              <Chip label="마감 D-30" variant="outlined" />
                            </Stack>
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                            <Typography
                              component="div"
                              variant="body2"
                              className="body2"
                              color="text.primary"
                            >
                              인공지능산업융합사업단에서는 인공지능 중심
                              산업융합 집적단지 조성사업의 일환으로 AI 직무능력
                              고도화 및 문제해결 능력을 갖춘 AI 실무인재 육성을
                              인공지능산업융합사업단에서는 인공지능 중심
                              산업융합 집적단지 조성사업의 일환으로 AI 직무능력
                              고도화 및 문제해결 능력을 갖춘 AI 실무인재 육…
                              <br />
                            </Typography>
                            <span className="body3">
                              모집종료 <em>2021-11-21</em> 조회 <em>169</em>
                            </span>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" fullWidth className="bottom_btn">
                  더보기
                </Button>
              </div>
            </div>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box css={styles.sub_cont02}>
            <div className="content">
              <Stack spacing={6} direction="row" justifyContent="space-between">
                <Typography variant="h5" component="div">
                  상시 모집
                  <span className="data">
                    <em>12</em> 건
                  </span>
                </Typography>
                <div className="select">
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Stack>
              <Box css={styles.slide_cont02}>
                <Swiper {...swiperParams}>
                  {swiperData.map((item) => (
                    <SwiperSlide key={item.img}>
                      <Card css={styles.hotslide}>
                        <CardActionArea>
                          <Stack direction="row" className="tag" spacing={1}>
                            <Chip label="사업화" className="blue" />
                            <Chip
                              label="마감 D-30"
                              variant="outlined"
                              className="wh"
                            />
                          </Stack>
                          <CardMedia
                            component="img"
                            height="200"
                            image={item.img}
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              className="black"
                            >
                              2021년도 글로벌 AI제품&middot;서비스
                              <br />
                              고도화 지원기업 모집공고
                            </Typography>
                            <p className="sub_txt">접수기간</p>
                            <p className="sub_txt">
                              2021-11-21~2021-12-11 18:00(모집중)
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
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
                      <em>12</em> 건
                    </span>
                  </Typography>
                  <div className="select">
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={currency}
                      onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-select-currency"
                      select
                      value={currency}
                      onChange={handleChange}
                      sx={{ ml: 1 }}
                    >
                      {count.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Stack>
                <List>
                  {listData.map((item) => (
                    <ListItem key={item.img}>
                      <ListItemAvatar sx={{ mr: 3 }}>
                        <img src={`${item.img}`} />
                      </ListItemAvatar>
                      <ListItemText
                        secondary={
                          <React.Fragment>
                            <Stack direction="row" className="tag" spacing={1}>
                              <Chip label="NEW" className="new" />
                              <Chip label="사업화" className="blue" />
                              <Chip label="마감 D-30" variant="outlined" />
                            </Stack>
                            <Typography variant="body1">
                              {item.title}
                            </Typography>
                            <Typography
                              component="div"
                              variant="body2"
                              className="body2"
                              color="text.primary"
                            >
                              인공지능산업융합사업단에서는 인공지능 중심
                              산업융합 집적단지 조성사업의 일환으로 AI 직무능력
                              고도화 및 문제해결 능력을 갖춘 AI 실무인재 육성을
                              인공지능산업융합사업단에서는 인공지능 중심
                              산업융합 집적단지 조성사업의 일환으로 AI 직무능력
                              고도화 및 문제해결 능력을 갖춘 AI 실무인재 육…
                              <br />
                            </Typography>
                            <span className="body3">
                              모집종료 <em>2021-11-21</em> 조회 <em>169</em>
                            </span>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" fullWidth className="bottom_btn">
                  더보기
                </Button>
              </div>
            </div>
          </Box>
        </TabPanel>
      </Box>
      <Box sx={{ m: 50 }}></Box>
    </div>
  );
}

export default Notice;
