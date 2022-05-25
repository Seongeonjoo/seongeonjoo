// 참여이벤트/ ->  디딤널 페이지
// import React from "react"
import * as styles from '../Notice/styles';
import * as React from 'react';
import BreadCrumb from '~/components/BreadCrumb';
import { Box, FormControl, MenuItem, TextField, Stack, Chip,Input } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {CustomButton} from 'shared/components/ButtonComponents';
import { DeletIcon } from 'shared/components/IconComponents';

function Treadmill() {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  function FileUpload() {
    const handleDelete = () => {
      console.info('delete');
    };
    const handleUpload = () => {
      console.info('Upload');
    };
    return(
      <Stack spacing={2} direction="row" justifyContent="left" css={styles.deletTag}>
        <CustomButton label={'파일첨부'} type={'fileBtn'} color={'outlined'} onClick={handleUpload}/>
        <Chip variant="outlined" label="파일명.pdf" onDelete={handleDelete} deleteIcon={<DeletIcon />}/>
        <Chip variant="outlined" label="파일명.pdf" onDelete={handleDelete} deleteIcon={<DeletIcon />}/>
      </Stack>
    );
  }
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
        <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit" style={{ marginTop: 0 }}>
                디딤널 문의 작성
              </h2>
              <p>
                AICA에게서 바라는 점이나 제안하고 싶은 내용을 접수하는 곳입니다.<br className="pc"/>
                구인 및 구직 뿐만 아니라 사업제안, AI 관련 사업에 필요한 도움을 전달하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        {/* 상세 list 리스트 */}
        <div className="content">
          <div css={styles.detal_list}>
            <Box css={styles.inputBox}>
              <div className="inputtxt">문의내용<em>*</em></div>
              <FormControl sx={{ width: '220px'}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  sx={{ height: '48px'}}
                >
                  <MenuItem value={10}>1111</MenuItem>
                  <MenuItem value={20}>2222</MenuItem>
                  <MenuItem value={30}>3333</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box css={styles.inputBox}>
              <div className="inputtxt">제목<em>*</em></div>
              <TextField
                id="name" 
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box css={styles.inputBox}>
              <div className="inputtxt">문의내용<em>*</em></div>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
              />
              <span className="count"><em>1</em>/1000</span>
            </Box>
            <Box css={styles.inputBox}>
              <div className="inputtxt">답변받을 이메일<em>*</em></div>
              <TextField
                id="name" 
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box css={styles.inputBox}>
              <div className="inputtxt">파일첨부</div>
              <FileUpload/>
            </Box>
            <hr className="m20"/>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{marginTop: '40px'}}>
              <CustomButton label={'취소'} type={'listBack'} color={'outlinedblack'}/>
              <CustomButton label={'확인'} type={'listBack'} color={'primary'}/>
            </Stack>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Treadmill;
