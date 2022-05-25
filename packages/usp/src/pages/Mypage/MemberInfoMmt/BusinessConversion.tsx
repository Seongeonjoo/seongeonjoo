// 사용자지원 -> 사업자전환
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function BusinessReservation() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>사업자전환</h1>
      </Container>
    </ThemeProvider>
  );
}

export default BusinessReservation;