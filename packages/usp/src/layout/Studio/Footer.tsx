/* eslint-disable jsx-a11y/alt-text */
import * as styles from './styles';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RouteType } from '~/models/RouteType';

import useSWR from 'swr';

const footerSwiper = {
  navigation : true,
  slidesPerView: 5,
  spaceBetween: 20,
  speed: 600, 
  pagination : false,
}
function Footer(args: any) {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const { data: routes = [] } = useSWR('route://service');
  const syncLocation = () => {
    setSelected(() => location.pathname);
  };

  //* location 시 변경 selected 초기화
  useEffect(syncLocation, [location]);

  const handleClick = (route: any) => {
    setSelected(route.path);
  };
  return (
    <div css={styles.container}>
      <div className="footer">
        <div>
          <Box css={styles.slide_cont}>
            <Swiper {...footerSwiper}>
                  <SwiperSlide>
                    aaaaaa
                  </SwiperSlide>
                  <SwiperSlide>
                    bbbbb
                  </SwiperSlide>
                  <SwiperSlide>
                    cccccc
                  </SwiperSlide>
                  <SwiperSlide>
                    aaaaaa
                  </SwiperSlide>
                  <SwiperSlide>
                    bbbbb
                  </SwiperSlide>
                  <SwiperSlide>
                    cccccc
                  </SwiperSlide>
            </Swiper>
          </Box>
          <Box className="cont2">
            <Stack spacing={6} direction="row" justifyContent="space-between">
              <Box css={styles.box01}>
                <nav role="navigation" {...args}>
                  <ul>
                    {routes.map((row: RouteType, i: number) => {
                      const isActive = selected.indexOf(row.path!) > -1;
                      return (
                        <li key={i} className={clsx([!!isActive && 'active'])}>
                          <button type="button" onClick={handleClick.bind(null, row)}>
                            {row.label}
                          </button>
                          <ul>
                            {(row.children || []).map((col: RouteType, k: number) => {
                              return (
                                <li key={k}>
                                  <NavLink to={`${col.path}`} replace>
                                    {col.label}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div>
                  <ul>
                    <li>
                      <NavLink to={`/`} >
                        개인정보처리방침
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/`} >
                        이용약관
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/`} >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/`} >
                        사용자 매뉴얼
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/`} >
                        자료실
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Box>
              <Box css={styles.box02}>
                <img src="/"/>
                <div>
                  광주광역시 북구 첨단과기로 176번길 11 3층
                  TEL. 062-610-3910  FAX. 062-974-1943
                </div> 
                <p>©2021 인공지능산업융합사업단. ALL RIGHTS RESERVED</p>
                <div className="sns_icon">
                    <ul>
                      <li>book</li>
                      <li>tw</li>
                      <li>ins</li>
                    </ul>
                </div>
              </Box>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Footer;
