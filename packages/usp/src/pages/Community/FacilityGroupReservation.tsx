// 사업단소개/ ->  사업단소개 페이지
// import React from "react"
import * as styles from './styles';
import BreadCrumb from '~/components/BreadCrumb';
import Box from '@mui/material/Box';

function FacilityGroupReservation() {

  return (
    <div css={styles.container}>
      <Box css={styles.sub_cont01}>
        <div className="benner">
          <BreadCrumb />
          <div className="content">
            <div className="txtbox">
              <h2 className="tit">사업단소개</h2>
              <p>
                관심있는 사업 및 교육 분야를 선택해주세요. <br />
                로그인 시마다 선택한 분야의 새로운 정보를 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default FacilityGroupReservation;