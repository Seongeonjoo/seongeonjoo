import { NavLink } from 'react-router-dom';
import * as styles from './styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Home() {
  return (
    <div css={styles.container}>
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
      <div style={{ height: 900 }}></div>
    </div>
  );
}

export default Home;
