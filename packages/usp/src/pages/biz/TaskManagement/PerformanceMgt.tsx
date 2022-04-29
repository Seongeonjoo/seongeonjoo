// 성과관리 -> 성과관리
// import React from "react"
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function PerformanceMgt() {

  return (
      <Container component="main" maxWidth="xs" css={styles.container}>
        <CssBaseline />
        <h1>성과관리</h1>
      </Container>
  );
}

export default PerformanceMgt;