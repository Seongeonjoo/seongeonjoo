import { useState,useRef, Fragment,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfigStore } from "../Factor/Factor";
import * as styles from './styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import {fetchFactorPhoneCertReq,fetchFactorPhoneCertCheck,
  fetchFactorEmailCertReq,fetchFactorEmailCertCheck} from '~/fetches';
  // import { useLocation } from 'react-router-dom';
// import { inputType,certNoType,pwChangeType } from '~/fetches/fetchIdTrouver';
// import {intialValues} from '../../../models/ModelSignin';
/*
  화면: 아이디 찾기 인증 핸드폰/이메일
  작성자: Seongeonjoo / navycui
  작성일: 20220517
  TEST DATA:  hgchoi / 최해군 / 19820923 / hgchoi@brainednet.com / 01098835877
*/
function FactorFind() {
  const navigate = useNavigate();
  // const receive:any = useLocation();
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  // const checked = useRef() as React.MutableRefObject<HTMLDivElement>;
  const {mobileNo:mobNo,email:emlVal,key} = useConfigStore();
  console.log("useLocation",mobNo);

  const [minutes, setMinutes] = useState(5); // 분
  const [seconds, setSeconds] = useState(0); // 초

  const [radioType, setRadioType] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  const [mobileNo, setMobileNo] = useState<string | undefined>(mobNo);
  const [email, setEmail] = useState<string | undefined>(emlVal);
  const [certReq, setCertReq] = useState<string>('');

  // 라디오 이벤트
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    // reset() ???? 한번에
    let valbox = (event.target as HTMLInputElement).value
    setCertReq('')
    if(valbox === 'tel'){
      setRadioType(true)
    } else {
      setRadioType(false)
    }
  };

  // 인증 발송
  const handleSubmitCert = (event: React.MouseEvent<HTMLElement>) => {
    setCount(1);
    setMinutes(4);
    setSeconds(59);
    if(radioType){
      // 휴대폰 인증발송
      fetchFactorPhoneCertReq({ key: key, mobileNo: mobileNo}).then((res:any)=>{
      }).catch((err:any)=>{ alert("일치하는 회원정보가 없습니다." + err.message) })
    } else {
      // 이메일 인증발송
      fetchFactorEmailCertReq({ key: key, email: email}).then((res:any)=>{
      }).catch((err:any)=>{ alert("일치하는 회원정보가 없습니다." + err.message)});
    }
  };

  // 다음 이벤트
  const handleSubmitClick = (event: React.MouseEvent<HTMLElement>) => {
    // 인증 번호 체크
    if(certReq === '') return;
    if(radioType){
      // 휴대폰 인증 확인
      fetchFactorPhoneCertCheck({key:key,certNo:certReq}).then((res:any)=>{
        // const {email,key,mobileNo} = res;
        // sessionStorage.setItem('__FACTOR_KEY__', key);
        navigate('/FactorReset',{
          state:{
            // loginId:loginId,
            stus:'pl'
          }
        })
      }).catch((err:any)=>{ alert("일치하는 회원정보가 없습니다." + err.message); });
    } else {
      // 이메일 인증 확인
      fetchFactorEmailCertCheck({key:key,certNo:certReq}).then((res:any)=>{
        const {loginId} = res;
        navigate('/FactorReset',{
          state:{ loginId:loginId, stus:'bl'}
        })
      }).catch((err:any)=>{ alert("일치하는 사업자정보가 없습니다." + err.message); });;
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertReq(e.target.value);
  }

  // timeout
  useEffect(() => {
    if(count>0) {
      intervalRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      return ;
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [minutes, seconds]);

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <div className="tit">
          <h1>비밀번호 재설정</h1>
          <p>가입 시 입력한 회원정보를 입력해 주세요.</p>
        </div>
        <Box component="form" noValidate autoComplete="off" css={styles.singTextbox}>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={handleChangeRadio} defaultValue={'tel'}>
            <FormControlLabel value='tel' control={<Radio />}  name='tel' label="휴대폰 인증" />
            <FormControlLabel value='mail' control={<Radio />} name='mail' label="이메일 인증" />
          </RadioGroup>
        </Box>
        { radioType ? 
        // 핸드폰 인증
        <Fragment>
          <Box component="form" noValidate autoComplete="off" css={styles.singTextbox}>
            <TextField required id="phon"  label="휴대폰 번호" value={mobileNo} variant="outlined" fullWidth placeholder="010-0000-0000"/>
            <Button className='rbt' onClick={handleSubmitCert}>인증번호</Button> 
          </Box>
          <Box component="form" noValidate autoComplete="off" css={styles.singTextbox}>
            <TextField required id="id" name='certReqPhone'  label="인증번호 확인" value={certReq} variant="outlined" fullWidth  onChange={handleChangeInput}/>
            <span className='rbt'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
          </Box>
        </Fragment>
        :
        // 이메일 인증
        <Fragment>
          <Box component="form" noValidate autoComplete="off" css={styles.singTextbox}>
            <TextField required  id="emailReq" value={email}   label="이메일"  variant="outlined" fullWidth placeholder="인증 가능한 이메일 주소 입력" />
            <Button className='rbt' onClick={handleSubmitCert}>인증번호</Button> 
          </Box>
          <Box component="form" noValidate autoComplete="off" css={styles.singTextbox}>
            <TextField required id="emailCheck" name='certReqEmail' label="인증번호 확인" value={certReq} variant="outlined" fullWidth  onChange={handleChangeInput}/>
            <span className='rbt'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
          </Box>
        </Fragment>
      }
        <Stack spacing={2} direction="row" css={styles.signbtn}>
          <Button fullWidth variant="contained" type="button" onClick={handleSubmitClick}>다음</Button>
        </Stack>
      </div>
    </section>
  )
}

export default FactorFind;
