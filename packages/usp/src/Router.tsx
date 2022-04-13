import React, { Suspense } from 'react';
import * as DOM from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import NotFound from 'shared/NotFound';
import Layout, { LayoutType } from '~/layout';

export type RouteType = {
  label?: string;
  layout?: LayoutType;
  element?: any;
  path?: string;
  index?: boolean;
  middleware?: string[];
  children?: RouteType[];
};

type MiddlewareType = 'auth' | 'factor';

function middleware(route: RouteType, type: MiddlewareType[]) {
  const middleware = [...(route.middleware || []), ...type];
  return Object.assign(route, { middleware });
}

//* Route 설정
export const ServiceRoutes: RouteType[] = [
  {
    path: 'a',
    label: '공고알림',
    children: [
      middleware(
        {
          path: 'a1',
          label: '모집공고',
          layout: 'studio',
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
        ['auth']
      ),
      {
        path: 'a2',
        label: '선정결과공고',
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
      {
        path: 'a3',
        label: '사업정보알림',
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
      {
        path: 'a4',
        label: '공지사항',
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
    ],
  },
  {
    path: 'b',
    label: '이용지원',
    children: [
      {
        path: 'b1',
        label: '자주묻는질문',
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
      {
        path: 'b2',
        label: '사용자 메뉴얼',
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
      {
        path: 'b3',
        label: '자료실',
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
      {
        path: 'b4',
        label: '전문가신청',
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
    ].map((route: Partial<RouteType>) => ({
      ...route,
      layout: 'studio',
    })) as RouteType[],
  },
  {
    path: 'c',
    label: '커뮤니티',
    children: [
      {
        path: 'c1',
        label: '사업단소개',
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
      {
        path: 'c3',
        label: '시설예약',
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
    ],
  },
  {
    path: 'd',
    label: '이벤트뉴스',
    children: [
      {
        path: 'd1',
        label: '행사/이벤트',
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
      {
        path: 'd2',
        label: '디딤널',
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
      {
        path: 'd3',
        label: '자원정보공유',
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
    ].map((route: Partial<RouteType>) => ({
      ...route,
      layout: 'studio',
    })) as RouteType[],
  },
  {
    path: 'e',
    label: '서비스소개',
    children: [
      {
        path: 'e1',
        label: '서비스안내',
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
    ].map((route: Partial<RouteType>) => ({
      ...route,
      layout: 'studio',
    })) as RouteType[],
  },
];

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
    label: '약관동의(사업자)',
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
          element: React.lazy(() => import('~/pages/Factor')),
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
].map((route: Partial<RouteType>) => ({
  ...route,
  layout: 'space',
})) as RouteType[];

export const SampleRoute: RouteType[] = [
  {
    path: 'board',
    children: [
      {
        index: true,
        element: (
          <Loader
            route={{
              label: 'board',
              layout: 'studio',
              element: React.lazy(() => import('~/pages/Board')),
            }}
          />
        ),
      },
      {
        path: ':id',
        element: (
          <Loader
            route={{
              label: 'view',
              layout: 'studio',
              element: React.lazy(() => import('~/pages/Board/View')),
            }}
          />
        ),
      },
    ],
  },
  {
    path: 'mypage',
    element: (
      <Loader
        route={middleware(
          {
            label: 'mypage',
            layout: 'studio',
            element: React.lazy(() => import('~/pages/Mypage')),
          },
          ['auth', 'factor']
        )}
      />
    ),
  },
];

export const ReferenceRoutes: RouteType[] = [];

function Loader({ route }: { route: RouteType }) {
  const View = route.element;
  return (
    <Suspense fallback={<div>loading</div>}>
      <Layout name={route.layout!} middleware={route.middleware}>
        <View />
      </Layout>
    </Suspense>
  );
}

function Routes() {
  const routes = useRoutes([
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
    ...ServiceRoutes,
    ...UtilityRoutes,
    ...SampleRoute,
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return routes;
}

function Router() {
  return (
    <DOM.BrowserRouter>
      <Routes />
    </DOM.BrowserRouter>
  );
}
export default Router;
