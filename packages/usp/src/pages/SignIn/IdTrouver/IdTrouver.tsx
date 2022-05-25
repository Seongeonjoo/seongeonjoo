import { useState,useRef, ChangeEvent, } from 'react';
import * as styles from './styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { fetchIdTrouver, fetchIdTrouverBiz} from '~/fetches';
import { inputType } from '~/fetches/fetchIdTrouver';
import { useNavigate } from 'react-router-dom';
import { errorsType,helperTextsType,labelsType,intialValues,
  intialValuesErrors,intialValuesHptx,intialValuesLab,intialValuesLabBiz,initSetErrors,initSetLabels,initSetHelperTexts} from '../../../models/ModelSignin';
/*
  화면: 아이디 찾기
  작성자: Seongeonjoo / navycui
  작성일: 20220513
*/

export default function IdTrouver (){
  const navigate = useNavigate();
  const checked = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  const [valueRadio, setValueRadio] = useState<string>('PL');

  const [formValues, setFormValues] = useState(intialValues);
  const [errors, setErrors] = useState<errorsType>(initSetErrors);
  const [labels, setLabels] = useState<labelsType>(initSetLabels);
  const [helperTexts, setHelperTexts] = useState<helperTextsType>(initSetHelperTexts);
    
  // 라디오 이벤트
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    // reset() ???? 한번에
    let valbox = (event.target as HTMLInputElement).value
    setFormValues(intialValues)
    setErrors(intialValuesErrors);
    setHelperTexts(intialValuesHptx)
    setValueRadio((event.target as HTMLInputElement).value);
    if(valbox === 'PL'){
      setLabels(intialValuesLab)
    } else {
      setLabels(intialValuesLabBiz)
    }
  };

  // 입력 이벤트
  const handleChangeInput = (prop: keyof inputType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(intialValuesErrors);
    if(valueRadio === 'PL'){
      setLabels(intialValuesLab)
    } else {
      setLabels(intialValuesLabBiz)
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validation check  필수 체크
    if(!ckForm()) return;
      // test data 1982092331
      // "memberNm": "최해군", 
      // {"birthday": "19820923", 
      // "mobileNo": "01098835877"}
      // "email": "hgchoi@brainednet.com", 

    // 아이디 찾기 호출 
    if(valueRadio === 'PL'){
      // 개인조회
      fetchIdTrouver(formValues).then((res:any)=>{
        const {loginId} = res;
        navigate('/IdTrouverFind',{
          state:{
            loginId:loginId
          }
        })
      }).catch((err:any)=>{
        alert("일치하는 회원정보가 없습니다." + err.message);
      });
    } else {
      debugger;
      // 사업자조회
      fetchIdTrouverBiz(formValues).then((res:any)=>{
        const {loginId} = res;
        navigate('/IdTrouverFind',{
          state:{
            loginId:loginId
          }
        })

      }).catch((err:any)=>{
        alert("일치하는 사업자정보가 없습니다." + err.message);
      });;
    }
    
  };

  const ckForm = ():false | true => {
    const emailReg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
    // if(ckForm)
    if (valueRadio === 'PL') {
      if(formValues.memberNm === ''){
        setErrors({...errors,errorName:true});
        setLabels({...labels,labelsName:"이름은 필수입니다."});
        return false;
        // setHelperTexts({...helperTexts,helperTextName:"이름입력하세요"});
      } else if(formValues.birthday === ''){
        setErrors({...errors,errorId:true});
        setLabels({...labels,labelsId:"생년월일 필수입니다."});
        return false;
      } else if(formValues.mobileNo === ''){
        setErrors({...errors,errorPassword:true});
        setLabels({...labels,labelsPassword:"비밀번호 필수입니다."});
        return false;
      } else if(formValues.email === '') {
        setErrors({...errors,errorEmail:true});
        setLabels({...labels,labelsEmail:"이메일 필수입니다."});
        return false;
      } else {
        if(formValues.birthday){
          if(formValues.birthday.length < 8){
            setErrors({...errors,errorId:true});
            setLabels({...labels,labelsId:"자리수가 부족합니다."});
            return false;
          }
        }
        if(!emailReg.test(formValues.email) ){
          setErrors({...errors,errorEmail:true});
          setLabels({...labels,labelsEmail:"이메일 형식이 맞지 않습니다."});
          return false;			
        }
      }
    } else {
  
      if(formValues.memberNm === ''){
        setErrors({...errors,errorBizno:true});
        setLabels({...labels,labelsName:"사업자명은 필수입니다."});
        return false;
      } else if(formValues.bizrno === ''){
        setErrors({...errors,errorId:true});
        setLabels({...labels,labelsId:"사업자번호는 필수입니다."});
        return false;
      } else if(formValues.mobileNo === ''){
        setErrors({...errors,errorPassword:true});
        setLabels({...labels,labelsPassword:"핸드폰 번호는 필수입니다."});
        return false;
      } else if(formValues.email === ''){
        setErrors({...errors,errorEmail:true});
        setLabels({...labels,labelsEmail:"이메일 필수입니다."});
        return false;
      } else {
        if(formValues.bizrno){
          if(formValues.bizrno.length < 10){
            debugger;
            setErrors({...errors,errorId:true});
            setLabels({...labels,labelsId:"자리수가 부족합니다."});
            return false;
          }
        }
        if(formValues.mobileNo.length < 10){
          setErrors({...errors,errorPassword:true});
          setLabels({...labels,labelsPassword:"자리수가 부족합니다."});
          return false;
        }
        if(!emailReg.test(formValues.email) ){
          setErrors({...errors,errorEmail:true});
          setLabels({...labels,labelsEmail:"이메일 형식이 맞지 않습니다."});
          return false;			
        }
      }
    }
    return true;
  };

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <div className="tit">
          <h1>아이디 찾기</h1>
          <p>가입 시 입력한 회원정보를 입력해 주세요.</p>
        </div>
          <Box 
            component="form"
            noValidate
            autoComplete="off"
            css={styles.singTextbox}>
            <RadioGroup
              row
              defaultValue='PL'
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChangeRadio}
            >
             <FormControlLabel value='PL' control={<Radio />} name='PL' label="개인" />
             <FormControlLabel value='BL' control={<Radio />} name='BL' label="사업자"/>
            
            </RadioGroup>
          </Box>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} ref={checked}>
            {/* 이름 or 사업자명 */}
            <TextField
              css={styles.singTextbox}
              autoFocus
              // focused={focused.focusedName}
              error={(valueRadio === 'PL') ? errors.errorName : errors.errorBizno}
              value={formValues.memberNm}
              required
              id='memberNm'
              name='memberNm'
              label={labels.labelsName}
              variant="outlined"
              type="search"
              fullWidth
              placeholder={(valueRadio === 'PL') ? "이름 입력하세요" : "사업자명 입력하세요"}
              helperText={(valueRadio === 'PL') ?  helperTexts.helperTextName : helperTexts.helperTextBizno}
              onChange={handleChangeInput('memberNm')}
            />
            {/* 생년월일 / 사업자번호 */}
            <TextField css={styles.singTextbox}
              error={errors.errorId}
              label={(valueRadio === 'PL') ? labels.labelsId : labels.labelsBizno}
              helperText={(valueRadio === 'PL') ? helperTexts.helperTextId : helperTexts.helperTextBizno}
              required
              id={(valueRadio === 'PL') ? 'birthday' : 'bizrno'}
              name={(valueRadio === 'PL') ? 'birthday' : 'bizrno'} 
              value={(valueRadio === 'PL') ? formValues.birthday : formValues.bizrno}
              type="number"
              onInput = {(e:ChangeEvent<HTMLInputElement>) =>{
                (valueRadio === 'PL') ? 
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,8) :
                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10);
              }}
              variant="outlined"
              fullWidth
              placeholder={(valueRadio === 'PL') ? "(입력 숫자만 예:20220101)" : "(입력 숫자만 예:2022010123423)"}
              onChange={(valueRadio === 'PL') ? handleChangeInput('birthday') : handleChangeInput('bizrno')}
            />
            {/* 비밀번호 / 핸드폰번호 */}
            <TextField css={styles.singTextbox}
              error={errors.errorPassword}
              label={labels.labelsPassword}
              helperText={helperTexts.helperTextPassword}
              required
              id="mobileNo"
              name="mobileNo"
              value={formValues.mobileNo} 
              variant="outlined"
              fullWidth
              type={(valueRadio === 'PL') ? "password" : "number"}
              placeholder={(valueRadio === 'PL') ? "비밀번호 입력하세요" : " - 없이 입력하세요."}
              onChange={handleChangeInput('mobileNo')}
            />
            {/* 이메일 */}
            <TextField css={styles.singTextbox}
              error={errors.errorEmail}
              label={labels.labelsEmail}
              helperText={helperTexts.helperTextEmail}
              required
              id="email"
              name={"email"}
              value={formValues.email} 
              variant="outlined"
              fullWidth
              type="search"
              placeholder="인증 가능한 이메일 주소 입력"
              onChange={handleChangeInput('email')}
            />
          <Stack spacing={2} direction="row" css={styles.signbtn}>
            <Button fullWidth variant="contained" type="submit">다음</Button>
          </Stack>
        </Box>
      </div>
    </section>
  )
}