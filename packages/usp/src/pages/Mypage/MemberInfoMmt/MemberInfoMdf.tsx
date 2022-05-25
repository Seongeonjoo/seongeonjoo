// 사용자 지원 -> 회원정보변경
import React, { useState } from "react"
import * as styles from '../../Notice/styles';
import { createTheme } from '@mui/material/styles';
import { Box, Stack, TextField, Button, InputAdornment } from '@mui/material';
import BreadCrumb from "~/components/BreadCrumb";
import { NavLink } from "react-router-dom";
import { CustomRadioButtons, CustomButton } from 'shared/components/ButtonComponents';
import { Modalfront } from 'shared/components/ModalComponents';

function MemberInfoMdf() {
  const Modalform01 = () => {
    type modalType = 'normal' | 'confirm';
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<modalType>('normal');
    const [data, setData] = useState(false);
  
    const handlerModalOpen = (type: modalType) => {
      setOpen(true);
      setType(type);
    };
  
    return (
      <>
        <Stack flexDirection={'row'}>
          <a className="blue" onClick={() => {handlerModalOpen('normal');}}>변경</a>
        </Stack>
        <Modalfront
          open={open}
          type={type}
          title={'휴대폰번호 변경'}
          content={type.toString() + ' 모달'}
          onConfirm={() => {
            setOpen(false);
          }}
          onClose={() => {
            setOpen(false);
            if (data) setData(false);
          }}
        >
          <Box css={styles.modal_Box}>
            <div className="tit_text">
              인증을 확인하여 휴대폰 인증을 진행해주세요.
            </div>
            <Box css={styles.modal_inputBox}>
              <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} width={'100%'}>
                <TextField
                  id="name" 
                  variant="outlined"
                  fullWidth
                />
                <CustomButton label={'인증'} type={'modalBtn2'} color={'outlined'} onClick={() => {handlerModalOpen('normal');}}/>
              </Stack>
            </Box>
            <Box css={styles.modal_inputBox}>
              <TextField
                id="name" 
                variant="outlined"
                fullWidth
                placeholder="인증번호 입력*"
                helperText="인증 SMS이 발송되었습니다."
                InputProps={{
                  endAdornment: <InputAdornment position="end">10:00</InputAdornment>
                }}
              />
            </Box>
            <Box className="modal_Card">
              <div className="tit">
                유의사항
              </div>
              <ul>
                <li>인증 SMS는 최대 10분까지 유효합니다. </li>
                <li>인증 SMS의 유효시간이 지났거나 받지 못하신 경우 &lt;인증&gt; 버튼을 눌러 다시 받으세요.</li>
              </ul>
            </Box>
            <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} sx={{marginTop:"24px"}}>
              <CustomButton label={'취소'} type={'modalBtn'} color={'outlinedblack'} onClick={() => {setOpen(false)}}/>
              <CustomButton label={'저장'} type={'modalBtn'} color={'primary'} onClick={() => {setOpen(false)}} />
            </Stack>
          </Box>
        </Modalfront>
      </>
    );
  };
  const Modalform02 = () => {
    type modalType = 'normal' | 'confirm';
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<modalType>('normal');
    const [data, setData] = useState(false);
  
    const handlerModalOpen = (type: modalType) => {
      setOpen(true);
      setType(type);
    };
    const FormMail = () => {
      type modalType = 'normal' | 'confirm';
      const [open, setOpen] = useState(false);
      const [type, setType] = useState<modalType>('normal');
      const [data, setData] = useState(false);
    
      const handlerModalOpen = (type: modalType) => {
        setOpen(true);
        setType(type);
      };
      
      return (
        <>
          <Stack flexDirection={'row'}>
            <CustomButton label={'인증메일'} type={'modalBtn2'} color={'outlined'} onClick={() => {handlerModalOpen('normal');}}/>
          </Stack>
          <Modalfront
            open={open}
            type={type}
            title={'이메일 변경'}
            content={type.toString() + ' 모달'}
            onConfirm={() => {
              setOpen(false);
            }}
            onClose={() => {
              setOpen(false);
              if (data) setData(false);
            }}
          >
            <Box css={styles.modal_Box}>
              <div className="tit_text">
                인증메일을 확인하여 이메일 인증을 진행해주세요.
              </div>
              <Box css={styles.modal_inputBox}>
                <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} width={'100%'}>
                  <TextField
                    id="name" 
                    variant="outlined"
                    fullWidth
                  />
                  <CustomButton label={'인증메일'} type={'modalBtn2'} color={'outlined'} onClick={() => {handlerModalOpen('normal');}}/>
                </Stack>
              </Box>
              <Box css={styles.modal_inputBox}>
                <TextField
                  id="name" 
                  variant="outlined"
                  fullWidth
                  placeholder="인증번호 입력*"
                  helperText="인증메일이 발송되었습니다."
                  InputProps={{
                    endAdornment: <InputAdornment position="end">10:00</InputAdornment>
                  }}
                />
              </Box>
              <Box className="modal_Card">
                <div className="tit">
                  유의사항
                </div>
                <ul>
                  <li>인증메일은 최대 10분까지 유효합니다. </li>
                  <li>인증메일을 받지 못하신 경우 스팸메일함을 확인해 보세요.</li>
                  <li>인증메일의 유효시간이 지났거나 받지 못하신 경우 &lt;인증메일&gt; 버튼을 눌러 다시 받으세요. </li>
                </ul>
              </Box>
              <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} sx={{marginTop:"24px"}}>
                <CustomButton label={'취소'} type={'modalBtn'} color={'outlinedblack'} onClick={() => {setOpen(false)}}/>
                <CustomButton label={'저장'} type={'modalBtn'} color={'primary'} onClick={() => {setOpen(false)}} />
              </Stack>
            </Box>
          </Modalfront>
        </>
      );
    };
    return (
      <>
        <Stack flexDirection={'row'}>
          <a className="blue" onClick={() => {handlerModalOpen('normal');}}>변경</a>
        </Stack>
        <Modalfront
          open={open}
          type={type}
          title={'이메일 변경'}
          content={type.toString() + ' 모달'}
          onConfirm={() => {
            setOpen(false);
          }}
          onClose={() => {
            setOpen(false);
            if (data) setData(false);
          }}
        >
          <Box css={styles.modal_Box}>
            <div className="tit_text">
              변경할 이메일을 입력해주세요.
            </div>
            <Box css={styles.modal_inputBox}>
              <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} width={'100%'}>
                <TextField
                  id="name" 
                  variant="outlined"
                  fullWidth
                />
                <FormMail />
              </Stack>
            </Box>
            <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} sx={{marginTop:"40px"}}>
              <CustomButton label={'취소'} type={'modalBtn'} color={'outlinedblack'} onClick={() => {setOpen(false)}}/>
              <CustomButton label={'저장'} type={'modalBtn'} color={'item'} onClick={() => {setOpen(false)}} />
            </Stack>
          </Box>
        </Modalfront>
      </>
    );
  };
  const Modalform03 = () => {
    type modalType = 'normal' | 'confirm';
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<modalType>('normal');
    const [data, setData] = useState(false);
  
    const handlerModalOpen = (type: modalType) => {
      setOpen(true);
      setType(type);
    };
    return (
      <>
        <Stack flexDirection={'row'}>
          <a className="blue" onClick={() => {handlerModalOpen('normal');}}>변경</a>
        </Stack>
        <Modalfront
          open={open}
          type={type}
          title={'비밀번호 변경'}
          content={type.toString() + ' 모달'}
          onConfirm={() => {
            setOpen(false);
          }}
          onClose={() => {
            setOpen(false);
            if (data) setData(false);
          }}
        >
          <Box css={styles.modal_Box}>
            <div className="tit_text">
              현재 비밀번호와 새로운 비밀번호를 입력해주세요. 
            </div>
            <Box css={styles.modal_inputBox}>
              <div className="inputtxt">비밀번호<em>*</em></div>
              <TextField
                id="name" 
                variant="outlined"
                fullWidth
                placeholder="8~16자 영문 대·소문자, 숫자, 특수문자"
              />
            </Box>
            <Box css={styles.modal_inputBox}>
              <div className="inputtxt">비밀번호 확인<em>*</em></div>
              <TextField
                id="name" 
                variant="outlined"
                fullWidth
              />
            </Box>
            <Stack justifyContent={'center'} direction={'row'} spacing={'10px'} sx={{marginTop:"60px"}}>
              <CustomButton label={'취소'} type={'modalBtn'} color={'outlinedblack'} onClick={() => {setOpen(false)}}/>
              <CustomButton label={'저장'} type={'modalBtn'} color={'primary'} onClick={() => {setOpen(false)}} />
            </Stack>
          </Box>
        </Modalfront>
      </>
    );
  };
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">회원정보변경</h2>
              <p>회원가입정보를 확인하고 변경하실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          <Box css={styles.table03}>
              <table>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>회원유형</th>
                    <td>법인회원</td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>사업자등록번호</th>
                    <td>222222222222</td>
                  </tr>
                  <tr>
                    <th>대표자명</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>담당자명</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>담당자 휴대폰번호</th>
                    <td>01011111111 <Modalform01 /></td>
                  </tr>
                  <tr>
                    <th>담당자 이메일</th>
                    <td>wsgdhgdh@naver.com <Modalform02 /></td>
                  </tr>
                  <tr>
                    <th>아이디</th>
                    <td>aaa1234</td>
                  </tr>
                  <tr>
                    <th>비밀번호</th>
                    <td><Modalform03 /></td>
                  </tr>
                  <tr>
                    <th>마케팅정보 수신</th>
                    <td>
                      <CustomRadioButtons 
                        row
                        data={['동의', '미동의']}
                        onClick={(selected) => {
                        console.log(selected);
                      }}/>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Stack direction="row" justifyContent="center" spacing={2} sx={{ marginTop: '40px' }}>
                <CustomButton label={'취소'} type={'listBack'} color={'outlinedblack'}/>
                <CustomButton label={'확인'} type={'listBack'} color={'primary'}/>
              </Stack>
              <Box css={styles.memout}>
                <NavLink to="/">회원탈퇴</NavLink>
              </Box>
            </Box>
        </div>
      </Box>
    </div>
  );
}

export default MemberInfoMdf;

function setData(arg0: boolean) {
  throw new Error("Function not implemented.");
}
