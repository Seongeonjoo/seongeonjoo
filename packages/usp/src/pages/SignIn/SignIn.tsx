/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState, useEffect } from 'react';
// import NaverLogin from 'react-naver-login';
// import KakaoLogin from 'react-kakao-login';
// import GoogleLogin from 'react-google-login';
import { useNavigate, useLocation } from 'react-router-dom';
import authentication from 'shared/authentication';
import { fetchSignIn,fetchSignInSns } from '~/fetches';
import { UserType } from '~/fetches/fetchSignIn';
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
  const intialValues:UserType = { loginId: "", passwd: ""};
  const [formValues, setFormValues] = useState(intialValues);

  // data 입력 바인딩
  const handleChange = (e:any) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const handleClickLogin = async (event:any) => {
    // event.preventDefault();
    // const data:any = new FormData(event.currentTarget);
    if(!validate(event,formValues)){
      return ;
    };
    try {
      const res = await fetchSignIn({ loginId:formValues.loginId, passwd:formValues.passwd });
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

  useEffect(() => {}, []);

  // login form validation check
  const validate = (event:any,values:UserType) => {
    // id 확인
    if (!values.loginId) {
      // .. todo
      // values.loginMsg = "ID 입력하세요!";
      // values.isLogin = true;
      alert("로그인 id 입력하세요!");
      return false;
    }
    //비밀번호  확인
    if (!values.passwd) {
      // .. todo
      // values.pwMsg = "PASSWORD 입력하세요!";
      // values.isPasswd = true;
      alert("passwd 입력하세요!");
      return false;
      //비밀번호의 길이(length)가 4글자 이하일 때
    } else if (values.passwd.length < 4) {
      alert("비밀번호는 4자리이상으로 입력하세요");
      // .. todo
      // values.pwMsg = "Password must be more than 4 characters";
      return false;
    }
    return true;
  };


  //  네이버 로그인
  // const handleClickNaver = async (e:any) => {
  //   const naver_id_login:any = new window.naver_id_login("0yIGtk_Hx0CJq4f3cxEW", "http://pc.bnet.com:5500/snsNaverCallback");
  //   console.log(naver_id_login.oauthParams);
  //   const ress:any = await fetchSignInSns({accessToken: naver_id_login.oauthParams.access_token,uri:"sns/naver",});
  //   authentication.set(ress.data);
  //   // * Ref 페이지가 있는 경우.
  //   const qs = new URLSearchParams(location.search);
  //   const next = qs.get('nextUrl');
  //   if (next) {
  //     window.location.href = window.atob(next);
  //   } else {
  //     navigate('/');
  //   }
  // };


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
              name="loginId" 
              label="로그인" 
              variant="outlined"
              value={formValues.loginId}
              onChange={handleChange}
              autoFocus
              fullWidth
              required
            />
          </div>
          <div>
            <SignTextField
              id="Password"
              name="passwd" 
              label="비밀번호"
              type="password"
              value={formValues.passwd}
              onChange={handleChange}
              autoComplete="current-password"
              fullWidth
              required
            />
          </div>
        </Box>
        <Box css={styles.linkbtn} onClick={preventDefault}>
          <NavLink to={'/idtrouver'}>
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
          <Button fullWidth variant="contained" type="button" onClick={handleClickLogin}>
            로그인
          </Button>
        </Stack>
        {/* <Stack spacing={4} direction="row" css={styles.snsicon}>
          <KakaoLogin
            token={'d8630bd87de60999c46bded08b4d6bd1'}
            onSuccess={(res) => {handleClickKakao(res);console.log("KakaoLogin:=> onSuccess :: ", res);}}
            onFail={(err) => { console.log("KakaoLogin:=> onFail :: ", err);}}
            onLogout={() => { console.log("로그아웃");}}
            render={ renderProps => (
              <Button className="kakao" variant="text" type="button" onClick={renderProps.onClick}></Button>
            )}
          />
          <NaverLogin
            clientId="0yIGtk_Hx0CJq4f3cxEW"
            callbackUrl="http://pc.bnet.com:5500/snsNaverCallback"
            render={ (renderProps:any) => <div onClick={renderProps.onClick}><Button className="naver" variant="text" type="button"></Button></div>}
            onSuccess={(res:any) => {console.log("NaverLogin:=> onSuccess :: ",res);}}
            onFailure={(err:any) => console.error("NaverLogin:=> onFailure :: ",err)}
          />
          <GoogleLogin
            clientId="537391280179-01rf954pul1quqn724ccq5ss9b9hva47.apps.googleusercontent.com"
            render={(renderProps:any) =>(
                <div onClick={renderProps.onClick}>
                  <Button className="google" variant="text" type="button"></Button>
                </div>
            )} 
            onSuccess={(res:any) => {console.log("GoogleLogin:=> onSuccess :: ",res);handleClickGoogle(res);}}
            onFailure={(err:any) => console.error("GoogleLogin:=> onFailure :: ", err)}
            cookiePolicy={'single_host_origin'}
          />
        </Stack> */}
        <div css={styles.error}>
          <p>아이디 혹은 비밀번호를 5회 잘못 입력하였습니다.</p>
          <p>비밀번호 재 설정을 통해 비밀번호를 변경하신 후 이용가능합니다.</p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
