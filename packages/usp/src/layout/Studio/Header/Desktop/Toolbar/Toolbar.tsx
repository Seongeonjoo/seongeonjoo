import { Fragment,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthenticationType } from 'shared/authentication';
import useSWR from 'swr';
import * as styles from './styles';
import { ThemeContext } from 'usp/src/layout/index';

function Toolbar() {
  const { data } = useSWR<AuthenticationType>('authentication');
  const theme = useContext(ThemeContext);
  return (
    <section css={(theme.label === "home") ? styles.container : styles.containerFactor}>
      <div css={styles.sideon}>
        <p css={{ margin: 0 }}>오늘접속자수 1,000명 </p>
        <p css={{ margin: 0 }}>/ 네트워크상태 <em className="on"></em></p>
      </div>
      <ul css={styles.portal}>
        <li>
          <NavLink to="#">실종지원포털</NavLink>
        </li>
        <li>
          <NavLink to="#">데이터마켓</NavLink>
        </li>
        <li>
          <NavLink to="#">데이터센터</NavLink>
        </li>
        <li>
          <NavLink to="#">사업관리</NavLink>
        </li>
        <li>
          <NavLink to="#">AI교육</NavLink>
        </li>
      </ul>
      <ul css={styles.utility}>
        {data?.accessToken ? (
          <Fragment>
            <li>
              <NavLink to={'/signout'}>로그아웃</NavLink>
            </li>
            <li>
              <NavLink to={'/mypage'}>마이페이지</NavLink>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <NavLink to={'/signin'}>로그인</NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}>회원가입</NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </section>
  );
}
export default Toolbar;
