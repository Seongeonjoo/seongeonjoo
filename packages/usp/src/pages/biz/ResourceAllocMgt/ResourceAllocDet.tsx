// 자원할당내역 -> 자원할당내역
// import React from "react"
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function ResourceAllocDet() {

  return (
      <Container component="main" maxWidth="xs" css={styles.container}>
        <CssBaseline />
        <h1>자원할당내역</h1>
      </Container>
  );
}

export default ResourceAllocDet;