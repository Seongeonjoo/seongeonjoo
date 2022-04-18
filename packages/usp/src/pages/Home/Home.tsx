import { NavLink } from 'react-router-dom';
import * as styles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Slider from 'swiper';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Home() {
  return (
    <div css={styles.container}>
      <Box css={styles.maincont01}>
        <div className="main_benner">
          <img src='/images/main_banner01.png'/>
        </div>
        <div className='main_txtbox'> 
          <div className="main_tit">인공지능 <br/>혁신거점 <br/><strong>AI 인공지능 <br/>직접단지</strong></div>
          <p>인공지능 강국 대한민국을 열어갈 수 있도록 <br/>최고 수준의 인공지능산업융합 생태계를 조성하겠습니다.</p>
          <Button type="button" className='swifebtn'>SWIPE<br/> PLAY</Button>
        </div>
      </Box>
      <Box css={styles.maincont02}>
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
      <Box css={styles.maincont03}>
        <div className="content">
          <Stack spacing={6} direction="row" justifyContent="space-between">
            <div>
              <Typography variant="h2" component="div" gutterBottom>
                나에게 맞는<br/>
                <span className="blue">사업찾기</span>
              </Typography>
              <img src="/images/main/character01.png" className="char01"/>
            </div>
            <div>
              <p>나의 창업단계와 관심사업을 선택하여<br/> 나에게 맞는 사업공고를 빠르게 찾아볼 수 있습니다.</p>
              <dl>
                <dt>창업단계</dt>
                <dd>
                  <Checkbox {...label} defaultChecked icon={<FavoriteBorder />} checkedIcon={<Favorite />}/>
                </dd>
                <dd>초기</dd>
                <dd>도약</dd>
              </dl>
              <dl>
                <dt></dt>
                <dd></dd>
                <dd></dd>
                <dd></dd>
              </dl>
            </div>
          </Stack>
        </div>
      </Box>
      <Box css={styles.maincont04}>
        <div className="content">
          <Typography variant="h2" component="div" gutterBottom>
            다양한 <br/>서비스
          </Typography>
        </div>
      </Box>
      <Box css={styles.maincont05}>
        <div className="content">
          <Typography variant="h2" component="div" gutterBottom>
            최신 소식을 <br/>전해드립니다
          </Typography>
        </div>
      </Box>
      <div>
        <NavLink to="/factor">비밀번호 확인 페이지</NavLink>
      </div>
      <div>
        <NavLink to="/board">게시판 샘플</NavLink>
      </div>
      <div>
        <NavLink to="/composampl">컴포넌트 샘플</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">마이페이지</NavLink>
      </div>
      <div style={{ height: 900 }}></div>
    </div>
  );
}

export default Home;
