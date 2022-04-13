import { useNavigate, useLocation } from 'react-router-dom';
import authentication from 'shared/authentication';
import { fetchSignIn } from '~/fetches';
import * as styles from './styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SignTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      borderColor: '#707070',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async () => {
    try {
      const res = await fetchSignIn({ loginId: 'ymyoo', passwd: '1234' });
      authentication.set(res.data);

      //* Ref 페이지가 있는 경우.
      const qs = new URLSearchParams(location.search);
      const next = qs.get('nextUrl');
      if (next) {
        window.location.href = window.atob(next);
      } else {
        navigate('/');
      }
    } catch (e: any) {
      if (!!e.response && !!e.response.data) alert(e.response?.data.message);
    }
  };
  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <div className="tit">
          <h1>AICA 로그인</h1>
          <p>로그인하고, 다양한 서비스를 이용하세요.</p>
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { height: 60, mb: 1.6},
          }}
          noValidate
          autoComplete="off"
          css={styles.signinput}
        >
          <div>
            <SignTextField
              id="Signid" 
              label="로그인" 
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <SignTextField
              id="Password"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              fullWidth
            />
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'body1',
            margin: '23px auto 35px',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
            '& .MuiLink-root': {
              color: '#ccc',
              lineHeight: '1',
              borderRight:'1px solid #707070',
              paddingRight: '20px',
              fontSize: '14px',
              '&:last-child':{
                borderRight: 'none',
              },
            },
          }}
          onClick={preventDefault}
        >
          <NavLink to={'/signup'}>
            {'아이디 찾기'}
          </NavLink>
          <NavLink to={'/Factor'}>
            {'비밀번호 재설정'}
          </NavLink>
          <NavLink to={'/signup'}>
            {'회원가입'}
          </NavLink>
        </Box>
        <Stack spacing={2} direction="row" css={styles.signbtn}>
          <Button fullWidth variant="contained" type="button" onClick={handleClick}>
            로그인
          </Button>
        </Stack>
        <Stack spacing={4} direction="row" css={styles.snsicon}>
          <Button className="kakao" variant="text" type="button" onClick={handleClick}>
          </Button>
          <Button className="naver" variant="text" type="button" onClick={handleClick}>
          </Button>
          <Button className="google" variant="text" type="button" onClick={handleClick}>
          </Button>
        </Stack>
        <div css={styles.error}>
          <p>아이디 혹은 비밀번호를 5회 잘못 입력하였습니다.</p>
          <p>비밀번호 재 설정을 통해 비밀번호를 변경하신 후 이용가능합니다.</p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
