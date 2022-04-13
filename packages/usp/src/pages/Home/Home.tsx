import { NavLink } from 'react-router-dom';
import * as styles from './styles';

function Home() {
  return (
    <div css={styles.container}>
      <div css={styles.maincont01}>
        <img src='/images/main_banner01.png'/>
      </div>
      <div css={styles.maincont02}>
        main2 카드 슬라이드
      </div>
      <div>
        <NavLink to="/factor">비밀번호 확인 페이지</NavLink>
      </div>
      <div>
        <NavLink to="/board">게시판 샘플</NavLink>
      </div>
      <div>
        <NavLink to="/composampl">컴포넌트 샘플</NavLink>
      </div>
      <div>
        <NavLink to="/mypage">마이페이지</NavLink>
      </div>
      <div style={{height: 900}}></div>
    </div>
  );
}

export default Home;
