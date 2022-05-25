// 문의관리 -> 1:1문의 목록
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function OneByOneMmt() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>사업예약</h1>
      </Container>
    </ThemeProvider>
  );
}

export default OneByOneMmt;