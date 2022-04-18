// 이용지원/ ->  자료실 페이지
import React from "react"
import * as styles from './styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,Container} from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const theme = createTheme();
function ReferenceRoom() {

  return (
    <ThemeProvider theme={theme} css={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>자료실</h1>
      </Container>
    </ThemeProvider>
  );
}

export default ReferenceRoom;
