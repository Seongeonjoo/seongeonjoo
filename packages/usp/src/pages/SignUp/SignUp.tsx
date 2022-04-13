import * as styles from './styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
//FRN-0010101_회원가입_회원유형 선택

const Conts = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SignUp() {
  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <NavLink to={'/'} css={styles.backPass}>
          이전 화면으로 돌아가기
        </NavLink>
        <Box sx={{ flex: 2, mr: 4 }}>
          <div className="tit">
            <h1>AICA 회원가입</h1>
            <p>하나의 아이디로 안전하고 편리하게 AICA의 서비스를 이용할수 있습니다.</p>
          </div>
          <Grid container rowSpacing={4} xs={12}>
            <Grid item  xs={6} sx={{mb: 3 }}>
              <div className='img'>
                <img src='/images/common/signup_icon01.png'/>
              </div>
              <div className='cont'>
                <div>사용자지원포털</div>
                <p>지원사업과 입주, 교육제공</p>
              </div>
            </Grid>
            <Grid item xs={6} sx={{mb: 3}}>
              <div className='img'>
                <img src='/images/common/signup_icon02.png'/>
              </div>
              <div className='cont'>
                <div>실증지원포털</div>
                <p>실증테스트 장비 이용</p>
              </div>
            </Grid>
            <Grid item xs={6} >
              <div className='img'>
                <img src='/images/common/signup_icon03.png'/>
              </div>
              <div className='cont'>
                <div>데이터유통포털</div>
                <p>다양한 데이터를 구매 및 이용</p>
              </div>
            </Grid>
            <Grid item xs={6} >
              <div className='img'>
                <img src='/images/common/signup_icon04.png'/>
              </div>
              <div className='cont'>
                <div>데이터센터</div>
                <p>데이터센터 소개정보</p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flex: 1, marginTop: 4 }}>
          <Card sx={{ mb: 0.2, borderRadius: '20px 20px 0 0'  }}>
            <CardContent>
              <h3>개인</h3>
              <p>일반 사용자 및 예비 창업자, 학생, 강사</p>
            </CardContent>
              <Stack spacing={2} direction="row" css={styles.signbtn}>
                <Button variant="contained" type="button">
                  <NavLink to={'/consumer'}>
                    {'가입하기'}
                  </NavLink>
                </Button>
              </Stack>
          </Card>
          <Card sx={{ borderRadius: '0 0 20px 20px' }}>
            <CardContent>
              <h3>사업자</h3>
              <p>개인 및 법인 사업자, 대학</p>
            </CardContent>
              <Stack spacing={2} direction="row" css={styles.signbtn}>
              <Button variant="contained" type="button">
                  <NavLink to={'/consumer'}>
                    {'가입하기'}
                  </NavLink>
                </Button>
              </Stack>
          </Card>
        </Box>
      </div>
    </section>
  );
}

export default SignUp;
