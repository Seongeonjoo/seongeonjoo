import api from '~/api';
import * as R from 'ramda';
import useSWR, { mutate } from 'swr';
import React, { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Layout from '~/layout';
import LinearProgress from '../src/components/Loading/LinearProgress';
import NotFound from 'shared/NotFound';
import { MiddlewareType, RouteType } from '~/models/RouteType';

function middleware(route: RouteType, type: MiddlewareType[]) {
  const middleware = [...(route.middleware || []), ...type];
  return Object.assign(route, { middleware });
}

function Loader({ route }: any) {
  
  const View = route.element;
  return (
    <Suspense
      fallback={<><LinearProgress/></>}
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
    const { label, path ,layout } = route;
    return {
      label,
      path,
      element: (
        <Loader
          route={{
            layout: layout,

            //* path 컴포넌트
            element: React.lazy(() => import(`~/pages${path}`)),
          }}
        />
      ),
    };
  });
};

export let ServiceRoutes = [];
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
    path: 'NoticeDetall/:id',
    label: '모집공고 상세',
      element: (
        <Loader
          route={{
            label: 'view',
            layout: 'studio',
            element: React.lazy(() => import('~/pages/Notice/View/NoticeDetall')),
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
  },
  {
    path: 'announcementDetail',
    label: '공지사항상세페이지',
    element: (
      <Loader
        route={{
          label: 'notice',
          layout: 'studio',
          element: React.lazy(
            () => import('~/pages/Notice/View/AnnouncementDetail')
          ),
        }}
      />
    ),
  },
  {
    path: 'announcementSelectionResDetail',
    label: '선정결과공고상세페이지',
    element: (
      <Loader
        route={{
          label: 'notice',
          layout: 'studio',
          element: React.lazy(
            () => import('~/pages/Notice/View/AnnouncementSelectionResDetail')
          ),
        }}
      />
    ),
  },
  // {
  //   path: 'mypage',
  //   element: (
  //     <Loader
  //       route={middleware(
  //         {
  //           label: 'mypage',
  //           layout: 'space',
  //           element: React.lazy(() => import('~/pages/MyPage')),
  //         },
  //         ['auth', 'factor']
  //       )}
  //     />
  //   ),
  // },
  {
    path: 'temp',
    label: '게시판 temp',
    element: (
      <Loader
        route={{
          label: 'temp',
          layout: 'space',
          element: React.lazy(() => import('~/pages/Temp/Temp')),
        }}
      />
    ),
  },
  {
    path: 'referenceRoomDetail',
    label: '자료실상세페이지',
    element: (
      <Loader
        route={{
          label: 'SupportForUse',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/SupportForUse/View/ReferenceRoomDetail')),
        }}
      />
    ),
  },
  {
    path: 'honsaEventDetail',
    label: '행사/이벤트 상세',
    element: (
      <Loader
        route={{
          label: 'EventNews',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/EventNews/View/HonsaEventDetail')),
        }}
      />
    ),
  },
  {
    path: 'ResInfoSharingDetail',
    label: '자원정보공유 상세',
    element: (
      <Loader
        route={{
          label: 'EventNews',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/EventNews/View/ResInfoSharingDetail')),
        }}
      />
    ),
  },
  {
    path: 'ResourceInfoSharing',
    label: '자원정보공유 의견작성',
    element: (
      <Loader
        route={{
          label: 'EventNews',
          layout: 'studio',
          element: React.lazy(() => import('~/pages/EventNews/ResourceInfoSharing')),
        }}
      />
    ),
  },
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
    ...SampleRoute,
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
    (item.menuNm === '셈플페이지') ? item.layout= 'empty': item.layout= 'studio';
    
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
