import * as R from 'ramda';
import React, { Suspense } from 'react';
import * as DOM from 'react-router-dom';
import { useRoutes, useLocation } from 'react-router-dom';
import NotFound from 'shared/NotFound';
import Layout, { LayoutType } from '~/layout';
import api from '~/api';
import useSWR, { mutate } from 'swr';
export type RouteType = {
  label?: string;
  layout?: LayoutType;
  element?: any;
  path?: string;
  index?: boolean;
  middleware?: string[];
  children?: RouteType[];
};

function Loader({ route }: any) {
  const View = route.element;
  return (
    <Suspense
      fallback={<div>loading.... check your chrome DevTool console</div>}
    >
      <Layout
        name={route.layout!}
        label={route.label!}
        middleware={route.middleware}
      >
        <View />
      </Layout>
    </Suspense>
  );
}

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

export let ServiceRoutes = [];
export const UtilityRoutes: RouteType[] = [
  {
    path: 'signup',
    label: '회원가입',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp')),
        }}
      />
    ),
  },
  {
    path: 'consumer',
    label: '약관동의(개인)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/Consumer')),
        }}
      />
    ),
  },
  {
    path: 'consumerform',
    label: '회원가입정보입력(개인)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/ConsumerForm')),
        }}
      />
    ),
  },
  {
    path: 'producer',
    label: '약관동의(사업자)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/Producer')),
        }}
      />
    ),
  },
  {
    path: 'producerform',
    label: '회원가입정보입력(개인)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/ProducerForm')),
        }}
      />
    ),
  },
  {
    path: 'confirm',
    label: '보호자인증화면',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/Confirm')),
        }}
      />
    ),
  },
  {
    path: 'exist',
    label: '기 가입 안내 (사업자)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/Exist')),
        }}
      />
    ),
  },
  {
    path: 'complete',
    label: '가입완료',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignUp/Complete')),
        }}
      />
    ),
  },
  {
    path: 'signin',
    label: '로그인',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn')),
        }}
      />
    ),
  },
  {
    path: 'idtrouver',
    label: '아이디 찾기',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn/IdTrouver')),
        }}
      />
    ),
  },
  {
    path: 'IdTrouverFind',
    label: '아이디 확인',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn/IdTrouverFind')),
        }}
      />
    ),
  },
  {
    path: 'signout',
    label: '로그아웃',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignOut')),
        }}
      />
    ),
  },
  {
    path: 'factor',
    label: '비밀번호 확인',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn/Factor')),
        }}
      />
    ),
  },
  {
    path: 'factorfind',
    label: '비밀번호 확인 (본인인증)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn/FactorFind')),
        }}
      />
    ),
  },
  {
    path: 'factorreset',
    label: '비밀번호 확인 (재설정)',
    element: (
      <Loader
        route={{
          label: 'home',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SignIn/FactorReset')),
        }}
      />
    ),
  },
  {
    path: 'composampl',
    label: '컴포넌트 샘플',
    element: (
      <Loader
        route={{
          label: 'sample',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/Composampl')),
        }}
      />
    ),
  },
  {
    path: 'snsNaverCallback',
    label: '컴포넌트 샘플',
    element: (
      <Loader
        route={{
          label: 'sns-login',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SnsNaverCallback')),
        }}
      />
    ),
  }
].map((route: Partial<RouteType>) => ({
  ...route,
  layout: 'space',
})) as RouteType[];

function Routes({ routes }: any) {
  const menus = R.pipe(flatten, adaptor)(routes);
  const nav = useRoutes([
    {
      index: true,
      element: (
        <Loader
          route={{
            label: 'home',
            layout: 'studio',
            element: React.lazy(() => import('~/pages/Home')),
          }}
        />
      ),
    },
    ...menus,
    ...UtilityRoutes,
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

function DynamicRouter() {
  //* 타입별 경로
  const [, type] = useLocation().pathname.split('/');

  const menu: any =
    {
      biz: 'PORTAL_PMS',
    }[type] || 'PORTAL_USP';
  const { data } = useSWR(`/member/api/auth/menus/${menu}/me`, fetcher);
  mutate('system://portal', menu.replace('PORTAL_', ''));

  if (!data) return <div />;
  const routes = hierarchy(data);
  mutate('route://service', routes);

  return <Routes routes={routes} />;
}

export default DynamicRouter;
