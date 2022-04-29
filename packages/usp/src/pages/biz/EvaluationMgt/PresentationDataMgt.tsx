// 발표자료관리 -> 발표자료관리
// import React from "react"
import * as styles from './styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function PresentationDataMgt() {

  return (
      <Container component="main" maxWidth="xs" css={styles.container}>
        <CssBaseline />
        <h1>발표자료관리</h1>
      </Container>
  );
}

export default PresentationDataMgt;