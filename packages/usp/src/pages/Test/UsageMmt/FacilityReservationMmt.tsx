// 사용자지원 -> 시설예약관리
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';

const theme = createTheme();
function FacilityReservationMmt() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>시설예약관리</h1>
      </Container>
    </ThemeProvider>
  );
}

export default FacilityReservationMmt;