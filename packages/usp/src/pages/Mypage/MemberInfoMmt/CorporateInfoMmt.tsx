// 사용자지원 -> 기업정보관리
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function CorporateInfoMmt() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>기업정보관리</h1>
      </Container>
    </ThemeProvider>
  );
}

export default CorporateInfoMmt;