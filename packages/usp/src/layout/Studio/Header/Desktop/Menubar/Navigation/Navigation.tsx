import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RouteType } from '~/DynamicRouter';

import useSWR from 'swr';
import * as styles from './styles';

function Navigation(args: any) {
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
    <nav role="navigation" css={styles.container} {...args}>
      <ul css={styles.menu}>
        {routes.map((row: RouteType, i: number) => {
          const isActive = selected.indexOf(row.path!) > -1;

          return (
            <li key={i} className={clsx([!!isActive && 'active'])}>
              <button type="button" onClick={handleClick.bind(null, row)}>
                {row.label}
              </button>
              <ul css={styles.navsub}>
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
  );
}

export default Navigation;
