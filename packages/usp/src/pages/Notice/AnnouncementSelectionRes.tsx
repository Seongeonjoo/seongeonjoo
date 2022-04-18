// 공고알림/ -> 선정 결과 공고 페이지
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const theme = createTheme();
function AnnouncementSelectionRes() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>선정 결과 공고 페이지</h1>
      </Container>
    </ThemeProvider>
  );
}

export default AnnouncementSelectionRes;
