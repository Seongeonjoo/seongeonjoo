// Front-사용자지원 -> SNS로그인설정
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function SnsLoginConfig() {
  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>SNS로그인설정</h1>
      </Container>
    </ThemeProvider>
  );
}

export default SnsLoginConfig;