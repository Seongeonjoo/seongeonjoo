// 사업/시설 -> 사업단소개 페이지
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function AboutTheBusinessGroup() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>사업단소개</h1>
      </Container>
    </ThemeProvider>
  );
}

export default AboutTheBusinessGroup;
