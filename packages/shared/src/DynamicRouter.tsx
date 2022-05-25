import * as R from 'ramda';
import React, { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import NotFound from 'shared/NotFound';
import useSWR, { mutate } from 'swr';
import api from "./api";
import {Loader, RouteType} from "./utils/RouteUtiles";

const flatten = (routes: any) => {
  const res = routes.reduce((a: any, b: any) => {
    const { children = [] } = b;
    const c = R.omit(['children'])(b);

    const d = flatten(children);

    return [...a, c, ...d];
  }, []);
  return res;
};

const adaptor = (routes: any) => {
  return routes.map((route: any) => {
    const { label, path } = route;
    return {
      label,
      path,
      element: (
        <Loader
          route={{
            layout: 'studio',

            //* path 컴포넌트
            element: React.lazy(() => import(`~/pages${path}`)),
          }}
        />
      ),
    };
  });
};


function Routes({ routes, addRoutes }: any) {
  const menus = R.pipe(flatten, adaptor)(routes);
  const nav = useRoutes([
    ...addRoutes,
    ...menus,
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return nav;
}

//* 1차원 배열을 계층 구조로 변환
function hierarchy(list: any) {
  //* 객체 복사
  const record: any[] = R.pipe(JSON.stringify, JSON.parse)(list);
  let map = record.reduce((a, b, i) => ({ ...a, [b.menuId]: i }), {});
  let root: any = {};

  //* 계층 생성
  record.forEach((item) => {
    item.path = `${item.url}`.replace(/\/\//g, '/');
    item.label = item.menuNm;
    const el =
      R.isNil(item.parentMenuId) || item.parentMenuId === 'ROOT'
        ? root
        : record[map[item.parentMenuId]];

    if (R.isNil(el.children)) el.children = [];

    el.children.push(item);
  });

  return root.children;
}

const fetcher = (url: string) => {
  return api({ baseURL: 'http://api.bnet.com', method: 'get', url });
};

type PortalType = "PORTAL_UAM" | "PORTAL_TSP";

export function DynamicRouter({addRoutes, portalType}: {addRoutes: RouteType[],portalType: PortalType} ) {
  //* 타입별 경로
  const [, type] = useLocation().pathname.split('/');
  const menu: any =
    {
      biz: portalType,
    }[type] || 'PORTAL_UAM';
  const { data } = useSWR(`/member/api/auth/menus/${menu}/me`, fetcher);

  mutate('system://portal', menu.replace('PORTAL_', ''));

  if (!data) return <div />;
  const routes = hierarchy(data);
  mutate('route://service', routes);

  return <Routes addRoutes={addRoutes} routes={routes} />;
}

// export default DynamicRouter;
