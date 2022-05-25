import { useLocation, NavLink } from 'react-router-dom';
import { RouteType } from '~/models/RouteType';
import useSWR from 'swr';

function getActivateRoutes(
  pathname: string,
  items: RouteType[],
  selected = []
): any {
  return items.reduce((a: any, b: RouteType) => {
    const regexp = new RegExp(`^${b.path!}`);
    if (regexp.test(pathname)) a.push(b);
    return getActivateRoutes(pathname, b.children || [], a);
  }, selected);
}

function Breadcrumbs() {
  const location = useLocation();
  const { data: routes } = useSWR('route://service');

  if (!routes) return <div />;

  const items = getActivateRoutes(location.pathname, routes);
  return (
    <ul>
      <li><NavLink to="/">홈</NavLink></li>
      {items.map((route: RouteType) => {
        return (
          <li key={route.path}>
            <NavLink to={route.path!}>{route.label}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
