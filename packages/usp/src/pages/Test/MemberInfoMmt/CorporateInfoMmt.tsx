// 사용자지원 -> 기업정보관리
// 사용자 지원 -> 회원정보변경
import React, { useState } from "react"
import * as styles from '../../Notice/styles';
import { createTheme } from '@mui/material/styles';
import { Box, Stack, TextField, Button, InputAdornment, Typography } from '@mui/material';
import BreadCrumb from "~/components/BreadCrumb";
import { NavLink } from "react-router-dom";
import { CustomRadioButtons, CustomButton } from 'shared/components/ButtonComponents';

function CorporateInfoMmt() {
  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">기업정보관리</h2>
              <p>기업의 상세정보를 등록하고 관리할 수 있습니다. 입력한 정보는 사업신청 시 신청정보로 활용될 수 있습니다.</p>
            </div>
          </div>
        </div>
      </Box>
      <Box css={styles.sub_cont02}>
        <div className="content">
          <Box css={styles.table04}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
            >
              {'기본정보'}
            </Typography>
              <table>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>산업분야</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>기업/기관유형</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>설립일</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>종사자수</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>상주인원</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>채용예정인력</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>업종</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>주 업종</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>주요기술 및 생산품</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>주요기술 및 생산품</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>대표전화</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>팩스</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>아이디</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>이름</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
              >
                {'매출정보'}
              </Typography>
              <table>
                <colgroup></colgroup>
                <tbody>
                  <tr>
                    <th>회원유형</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>이름</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                    <th>이름</th>
                    <td className="table_input">
                      <TextField
                        id="name" 
                        variant="outlined"
                        fullWidth
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <Stack direction="row" justifyContent="center" spacing={2} sx={{ marginTop: '40px' }}>
                <CustomButton label={'취소'} type={'listBack'} color={'outlinedblack'}/>
                <CustomButton label={'확인'} type={'listBack'} color={'primary'}/>
              </Stack>
              <Box css={styles.memout}>
                <NavLink to="/">회원탈퇴</NavLink>
              </Box>
            </Box>
        </div>
      </Box>
    </div>
  );
}
export default CorporateInfoMmt;