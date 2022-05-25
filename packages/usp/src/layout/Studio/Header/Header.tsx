// import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useEffect } from 'react';

function Header() {
  // const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1000px)');
  const init = () => {
    return () => {};
  };
  useEffect(init, []);
  //* 1280 미만 모바일 버전
  return <header>{isMobile ? <Mobile /> : <Desktop />}</header>;
}

export default Header;
