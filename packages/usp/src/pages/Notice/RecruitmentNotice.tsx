// 공고알림/ -> 모집 공고 페이지
// import React from "react"
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function RecruitmentNotice() {

  return (
      <Container component="main" maxWidth="xs" css={styles.container}>
        <CssBaseline />
        <h1>모집 공고</h1>
      </Container>
  );
}

export default RecruitmentNotice;
