import clsx from 'clsx';
import {
  NavLink, useLocation
} from 'react-router-dom';
import { RouteType, ServiceRoutes } from '~/Router';
import * as styles from './styles';


function Navigation(args: any) {
  const location = useLocation();
  
  return (
    <nav role="navigation" css={styles.container} {...args}>
      <ul css={styles.menu}>
        {ServiceRoutes.map((row: RouteType, i: number) => {
          const isActive = (row.children || []).some(
            (route) => location.pathname === `/${row.path}/${route.path}`
          );
          return (
            <li key={i}> 
              <a className={clsx([!!isActive && 'active'])}>
                {row.label}
                <ul>
                  {(row.children || []).map((col: RouteType, k: number) => {
                    return (
                      <li key={k}>
                        <NavLink to={`/${row.path}/${col.path}`} replace>
                          {col.label}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
