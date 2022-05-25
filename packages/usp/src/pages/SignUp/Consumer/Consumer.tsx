import * as styles from './styles';
import React, { useState,useEffect, Fragment } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { steps } from '~/models/ModelSignin';
import { ModalComponents } from '~/components/ModalComponents';
import { TermsResponse } from '~/models/Model';
import { fetchTermsGet } from '~/fetches';

/* 
  작성일    :   2022/05/23
  화면명    :   FRN-0010201_회원가입_약관동의/인증 (개인)
  회면ID    :   UI-USP-FRN-0010201
  화면/개발 :   Seongeonjoo / navycui
*/
export default function Consumer() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [termsBox, setTermsBox] = useState<TermsResponse>({beginDay:"",termsCn:"",termsType:""});
  const [prvcClctAgreMbr, setPrvcClctAgreMbr] = useState<TermsResponse>({beginDay:"",termsCn:"",termsType:""});
  const [prvcClctAgreBis, setPrvcClctAgreBis] = useState<TermsResponse>({beginDay:"",termsCn:"",termsType:""});

  useEffect(() => {
    ["TERMS_OF_USE","PRVC_CLCT_AGRE_MBR","PRVC_CLCT_AGRE_BIS"].map((m,i)=>{
      // 약관 조회
      fetchTermsGet(m).then((res)=>{
        if(i == 0){ setTermsBox(res);
        } else if (i == 1){ setPrvcClctAgreMbr(res)
        } else { setPrvcClctAgreBis(res)}
      }).catch((e)=>{
        return (
            <Fragment>
              <ModalComponents open={open} type={'normal'} title={e.response.status} content={e.response.data.message} 
                onConfirm={() => { setOpen(false) }} 
                onClose={() => { setOpen(false)}}>
              </ModalComponents>
            </Fragment>
          )
      });
    })
  }, []);

  // 모델창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <NavLink to={'/signup'} css={styles.backPass}>
          이전 화면으로 돌아가기
        </NavLink>
        <Stack>
          <div className="tit">
            <h1>AICA 회원가입</h1>
          </div>
          <Stepper activeStep={0} alternativeLabel css={styles.step}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <Box sx={{mb: 7}}>
          <div className="sub_tit">
            <h2>개인 회원가입</h2>
            <p>AICA 회원가입을 위해 약관에 동의해주세요.</p>
          </div>
          <FormGroup sx={{ mb: 1 }}>
            <FormControlLabel control={<Checkbox checked={allCheck} onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
              setAllCheck(!allCheck)
            }}/>} label="모든 약관에 동의합니다." />
          </FormGroup>
          <FormGroup css={styles.listbox}>
            {[1].map((m, i) => {
              return (
                <Box key={i}>
                  <div>
                    <CustomCheckBoxs
                      checkbox={checkBoxParam}
                      isAll={allCheck}
                      onClick={(s: string[]) => {
                        setAllCheck(s.length == 4)
                        
                      }}
                      modalOpen={()=>{
                        setModalOpen(true);
                      }}
                    />
                  </div>
                  <div css={styles.errbox}>AICA 이용약관에 동의해주세요</div>
                </Box>
              );
            })}
          </FormGroup>
        </Box>
        <Stack direction="row" justifyContent={'center'}>
          <NavLink to={'/signup'}>
            <Stack spacing={2} direction="row" css={styles.btnGroup}>
              <Button variant="contained" type="button" className="linebtn"> 이전 </Button>
            </Stack>
          </NavLink>
          <NavLink to={'/confirm'}>
          <Stack spacing={2} direction="row" css={styles.btnGroup}>
            <Button variant="contained" type="button" > {'휴대폰 본인인증'}</Button>
          </Stack>
          </NavLink>
        </Stack>
        {/* 모달 팝업부분 */}
        <Modal
          keepMounted
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box css={styles.modalpop}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              AICA 이용약관
              <Button type="button" onClick={closeModal}><CloseIcon/></Button>
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              AICA 이용약관<br/><br/>
              제1조(목적)<br/>
              본 약관은 광주시 인공지능 사업단에서 운영하는 AI직접단지지원포탈(이하 AICA이라고 한다.) 에서 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차와 기타 필요한 사항을 규정함을 목적으로 한다. <br/><br/>
              제1조(목적)<br/>
              본 약관은 광주시 인공지능 사업단에서 운영하는 AI직접단지지원포탈(이하 AICA이라고 한다.) 에서 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차와 기타 필요한 사항을 규정함을 목적으로 한다. <br/><br/>
            </Typography>
            <Stack spacing={2} direction="row" css={styles.btnGroup} sx={{ mt: 3 }}>
              <Button variant="contained" type="button" onClick={closeModal}>확인</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    </section>
  );
}
export const CustomCheckBoxs: React.FC<{
  checkbox: string[];
  isAll?:boolean
  row?: boolean;
  justifyContent?: 'center' | 'right' | 'left';
  children?: React.ReactNode;
  // style?: CSSProperties;
  onClick?: (selected: string[]) => void;
  modalOpen?:() => void;
}> = (props) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (props.onClick) props.onClick(selected);
  }, [selected]);

  useEffect(() => {
    if(props.isAll != undefined){
      if(props.isAll){
        setSelected(props.checkbox)
      } else if(!props.isAll && selected.length == props.checkbox.length){
        setSelected([])
      }
    }
  }, [props.isAll]);

  const handlerCheck = (label: string) => {
    const selectedIndex = selected.indexOf(label);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, label);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <Fragment>
      {props.checkbox.map((m, i) => {
        return (
          <Box key={i}>
            <div>
              <FormControlLabel 
                control={
                  <Checkbox checked={selected.includes(m)}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      handlerCheck(m)
                    }}/>
                } 
                label={m}/>
                <span className='gt blue' onClick={props.modalOpen}>(필수)</span>
                <span className='gt gray'>(선택)</span>
            </div>
            <div css={styles.errbox}>AICA 이용약관에 동의해주세요</div>
          </Box>
        );
      })}
    </Fragment>
  );
};

export const checkBoxParam: string[] = [ 'AICA 이용약관', 'AICA 개인정보 수집 및 이용동의' , 'AICA  개인정보 제3자 제공 동의' , '마케팅 정보 수신동의'];