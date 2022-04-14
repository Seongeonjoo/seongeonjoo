import * as styles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Notice() {

  const top100Films = [
    { title: '정시모집'},
    { title: '상시모집'},
    { title: '창업교육' },
    { title: '시설/공간/보육'}
  ]

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
  ];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="#fff" href="/" onClick={handleClick}>
      홈
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
      모집공고
    </Typography>,
  ];

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
            <div className='txtbox'> 
              <h2 className="tit">모집공고</h2>
              <p>AICA에서 진행하는 사업 공고를 확인하고 신청할 수 있습니다.<br/> 사업 신청 전에 신청 대상, 사전준비자료, 사업안내서 등을 충분히 숙지하시고 신청을 진행하시기 바랍니다.</p>
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
              <Button variant="contained" className="search_btn">검색</Button>
            </Stack>
            {/* 상세조건 테이블 */}
            
            <TableContainer component={Paper} css={styles.table}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>공고 구분</TableCell>
                    <TableCell align="left">모집상태</TableCell>
                    <TableCell align="left">모집대상</TableCell>
                    <TableCell align="left">사업분야</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          <Stack spacing={6} sx={{mb: 11}} direction="row" justifyContent="space-between">
            <Typography variant="h2" component="div">
              인기공고
            </Typography>
            <Button size="large" className="md_btn">더보기</Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Card css={styles.hotslide}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="253"
                  image="/images/main/cont02_01.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2021년도 글로벌 AI제품&middot;서비스<br/>
                    고도화 지원기업 모집공고
                  </Typography>
                  <p className="sub_txt">
                    접수기간
                  </p>
                  <p className="sub_txt">
                    2021-11-21~2021-12-11 18:00(모집중)
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card css={styles.hotslide}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="253"
                  image="/images/main/cont02_02.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2021년도 글로벌 AI제품&middot;서비스<br/>
                    고도화 지원기업 모집공고
                  </Typography>
                  <p className="sub_txt">
                    접수기간
                  </p>
                  <p className="sub_txt">
                    2021-11-21~2021-12-11 18:00(모집중)
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card css={styles.hotslide}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="253"
                  image="/images/main/cont02_03.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    2021년도 글로벌 AI제품&middot;서비스<br/>
                    고도화 지원기업 모집공고
                  </Typography>
                  <p className="sub_txt">
                    접수기간
                  </p>
                  <p className="sub_txt">
                    2021-11-21~2021-12-11 18:00(모집중)
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </div>
      </Box>
      
    </div>
  );
}

export default Notice;
