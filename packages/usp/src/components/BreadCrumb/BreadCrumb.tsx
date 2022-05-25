import * as styles from './styles';
import { useLocation } from 'react-router-dom';
import React from 'react';
import useSWR from 'swr';
import { RouteType } from '~/models/RouteType';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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

function BreadCrumb() {
  const location = useLocation();
  const { data: routes } = useSWR('route://service');

  if (!routes) return <div />;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }
  const items = getActivateRoutes(location.pathname, routes);
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      css={styles.bread}
    >
      <Link href="/" className="home" color="#fff"></Link>
      {items.map((route: RouteType) => (
        <Link
          underline="hover"
          key={route.path}
          color="#fff"
          href={route.path!}
          onClick={handleClick}
        >
          {route.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default BreadCrumb;
