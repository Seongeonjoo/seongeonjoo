import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useEffect } from 'react';
import classnames from 'classnames';
import { RouteType, ServiceRoutes } from '~/Router';
import { NavLink, useLocation } from 'react-router-dom';
import { any } from 'async';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log(theme);
  const init = () => {
    return () => {};
  };
  useEffect(init, []);
  //* 1280 미만 모바일 버전
  return <header className={classnames('header', {sub: ServiceRoutes})}>{isMobile ? <Mobile /> : <Desktop />}</header>;
}

export default Header;
