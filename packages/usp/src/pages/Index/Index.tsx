import { NavLink } from 'react-router-dom';
import * as styles from './styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Home() {

  return (
    <div css={styles.container}>
      <div className='content'>
        <Typography variant="h3" gutterBottom component="div">
          화면 컴포넌트
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }}aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>섹션</TableCell>
                <TableCell align="left">1 뎁스</TableCell>
                <TableCell align="left">2 뎁스</TableCell>
                <TableCell align="left">화면 ID</TableCell>
                <TableCell align="left">화면 URL</TableCell>
                <TableCell align="left">기타</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">메인 홈</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0370101</TableCell>
                  <TableCell align="left"><NavLink to="/home">/Home</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {/* 로그인, 회원가입 */}
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">회원가입</TableCell>
                  <TableCell align="left">회원유형 선택</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0010101</TableCell>
                  <TableCell align="left"><NavLink to="/SignUp">/SignUp</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">약관동의</TableCell>
                  <TableCell align="left">사업자 (팝업포함)</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0011501</TableCell>
                  <TableCell align="left"><NavLink to="/Consumer">/SignUp/Consumer</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">보호자 휴대폰인증</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0010901</TableCell>
                  <TableCell align="left"><NavLink to="/Confirm">/SignUp/Confirm</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">기가입안내(사업자)</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0011701</TableCell>
                  <TableCell align="left"><NavLink to="/Exist">/SignUp/Exist</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">가입정보 입력(개인)</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0010501</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">가입정보 입력(사업자)</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0010601</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">가입완료</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0011801</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">로그인</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0020101</TableCell>
                  <TableCell align="left"><NavLink to="/SignIn">/SignIn</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">아이디 찾기</TableCell>
                  <TableCell align="left">본인확인정보입력</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0030201</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">아이디 확인</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0030301</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">비밀번호재설정</TableCell>
                  <TableCell align="left">본인확인정보입력</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0040201</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">본인인증</TableCell>
                  <TableCell align="left">휴대폰인증</TableCell>
                  <TableCell align="left">UI-USP-FRN-0040301</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">이메일인증</TableCell>
                  <TableCell align="left">UI-USP-FRN-0040301</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row"></TableCell>
                  <TableCell align="left">비밀번호 재설정</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0040401</TableCell>
                  <TableCell align="left"><NavLink to="/">/</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {/* 회원정보 변경 */}
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">회원정보 변경</TableCell>
                  <TableCell align="left">비밀번호 확인</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0050101</TableCell>
                  <TableCell align="left"><NavLink to="/Factor">/Factor</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {/* 서브메인: 모집공고 */}
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">모집공고</TableCell>
                  <TableCell align="left">목록 정시,상시 (탭처리)</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0110101</TableCell>
                  <TableCell align="left"><NavLink to="/a1/Notice">/Notice</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {/* 마이페이지 */}
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">마이페이지</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0110101</TableCell>
                  <TableCell align="left"><NavLink to="/mypage">/mypage</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {/* 샘플 */}
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">게시판 샘플</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left">UI-USP-FRN-0370101</TableCell>
                  <TableCell align="left"><NavLink to="/board">/board</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">컴포넌트 샘플</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"><NavLink to="/composampl">/composampl</NavLink></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Home;
