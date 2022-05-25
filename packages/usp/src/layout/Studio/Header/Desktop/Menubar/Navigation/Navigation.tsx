import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RouteType } from '~/models/RouteType';
import useSWR from 'swr';
import * as styles from './styles';
// import Button from '@mui/material/Button/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Navigation(args: any) {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isToggle, setIsToggle] = useState('active');
  const { data: routes = [] } = useSWR('route://service');
  
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClickMui = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  const syncLocation = () => {
    setSelected(() => location.pathname);
  };
  //* location 시 변경 selected 초기화
  useEffect(syncLocation, [location]);

  const handleClick = (route: any ) => {
    isToggle ? setIsToggle('') : setIsToggle('active');
    setSelected(route.path);
  };
  
  return (
    <nav role="navigation" css={styles.container} {...args}>
      <ul css={styles.menu}>
        {routes.map((row: RouteType, i: number) => {
          const isActive = selected.indexOf(row.path!) > -1;
          return (
            <li key={i} className={clsx([!!isActive  && isToggle])}>
              <button type="button" onClick={handleClick.bind(null,row,isActive)}>
                {row.label}
              </button>
              <ul css={styles.navsub}>
                {(row.children || []).map((col: RouteType, k: number) => {
                  return (
                    <li key={k}>
                      <NavLink to={`${col.path}`}>{col.label}</NavLink>
                      {(col.children || []).map((col1: RouteType, k1: number) => {
                        return (
                          <Fragment key={k1}>
                            <NavLink to={`${col1.path}`}>{col1.label}</NavLink>
                          </Fragment>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </li>
            
            // <Fragment key={i}>
            //   <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClickMui}>
            //     {row.label}
            //   </Button>
            //   <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button', }}>
            //     {(row.children || []).map((col: RouteType, k: number) => {
            //       console.log(col.label)
            //       return (
            //         <MenuItem key={k} onClick={handleClose}>
            //           <NavLink to={'/signin'}>{col.label}</NavLink>
            //         </MenuItem>
            //       );
            //     })}
            //    {/* {(row.children || []).map((col: RouteType, k: number) => {
            //      return (
            //        <Fragment key={k}>
            //          <MenuItem onClick={handleClose}>{col.label}</MenuItem>
            //        </Fragment>
            //      );
            //    })} */}
            //   </Menu>
            // </Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
