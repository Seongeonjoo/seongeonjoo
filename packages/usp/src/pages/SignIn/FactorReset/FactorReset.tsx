import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from '@mui/material/IconButton';
import { useConfigStore } from "../Factor/Factor";
import {fetchFactorPwChange} from '~/fetches';
import {PwState,LableState,ErrorState} from '../../../models/ModelSignin';

function Factor() {
  const navigate = useNavigate();
  // const receive:any = useLocation();
  const {key} = useConfigStore();

  const [values, setValues] = useState<PwState>({ amount: "", password: "", passOneRest:"", weight: "", weightRange: "", showPassword: false});
  const [passLable, setPassLable] = useState<LableState>({passwordLable:"변경전",passOneRestLable:"변경후"});
  const [passError, setPassError] = useState<ErrorState>({passwordError:false,passOneRestError:false});

  const handleChange = (prop: keyof PwState) => (event: React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.name === 'password'){
      setPassError({...passError,passwordError:false});
      setPassLable({...passLable,passwordLable:"변경전"});
    } else {
      setPassError({...passError,passOneRestError:false});
      setPassLable({...passLable,passOneRestLable:"변경후"});
    }
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // 다음 이벤트
  const handleSubmitClick = (event: React.MouseEvent<HTMLElement>) => {

    // 인증 번호 체크
    if(values.password === '') {
      setPassError({...passError,passwordError:true});
      setPassLable({...passLable,passwordLable:"변경전 비밀번호는 필수입니다"});
      return;
    }  
    if(values.passOneRest === '') {
      setPassError({...passError,passOneRestError:true});
      setPassLable({...passLable,passOneRestLable:"변경후 비밀번호는 필수입니다."});
      return;
    }

    fetchFactorPwChange({ passwd1: values.password, passwd2: values.passOneRest, key:key}).then((res:any)=>{
      alert("비밀번호 재설정 되었습니다.");
      navigate('/signin',{
        state:{
          // loginId:loginId,
          stus:'pl'
        }
      })
    }).catch((err:any)=>{ alert("일치하는 회원정보가 없습니다." + err.message)});
  };

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <div className="tit">
          <h1>비밀번호 재설정</h1>
          <p>새로운 비밀번호를 입력해주세요. </p>
        </div>
        <Box component="form" noValidate autoComplete="off">
        <FormControl variant="outlined" fullWidth required css={styles.singTextbox}>
          <InputLabel htmlFor="password">
            {passLable.passwordLable}
          </InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            error={passError.passwordError}
            value={values.password}
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth required css={styles.singTextbox}>
          <InputLabel htmlFor="passOneRest">
            {passLable.passOneRestLable}
          </InputLabel>
          <OutlinedInput
            id="passOneRest"
            name="passOneRest"
            error={passError.passOneRestError}
            value={values.passOneRest}
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("passOneRest")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Box>
        <Stack spacing={2} direction="row" css={styles.signbtn}>
          <Button fullWidth variant="contained" type="button" onClick={handleSubmitClick}>다음</Button>
        </Stack>
      </div>
    </section>
  );
}

export default Factor;
