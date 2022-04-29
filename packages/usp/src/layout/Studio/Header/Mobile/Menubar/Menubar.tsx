/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import * as styles from './styles';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from 'usp/src/layout/index';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
}));

function Menubar() {
  const theme = useContext(ThemeContext);

  return (
    <section css={(theme.label === "home") ? styles.container : styles.containerFactor}>
      <div css={styles.sidemenu}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ fontSize: 30, color: '#fff' }}/>
        </IconButton>
        <h1 css={{ margin: 0 }}>
           {/** 이미지 base64 코드로 임시삽입 */}
          <NavLink to="/"><img src='/images/logo01.png'/></NavLink>
        </h1>
      </div>
      <div css={styles.searchbox}>
        <Search css={styles.search}>
            <SearchIcon sx={{ fontSize: 35, color: '#fff' }}/>
        </Search>
      </div>
    </section>
  );
}

export default Menubar;
