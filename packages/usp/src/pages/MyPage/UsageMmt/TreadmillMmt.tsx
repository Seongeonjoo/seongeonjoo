// 사용자지원 -> 1:1문의 목록
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function TreadmillMmt() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>디딤널관리</h1>
      </Container>
    </ThemeProvider>
  );
}

export default TreadmillMmt;