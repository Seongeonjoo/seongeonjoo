import React, {Suspense} from "react";
import Layout, {LayoutType} from "../layout";

export type RouteType = {
  label?: string;
  menuId?: any;
  layout?: LayoutType;
  element?: any;
  path?: string;
  index?: boolean;
  middleware?: string[];
  children?: RouteType[];
};

export type MiddlewareType = 'auth' | 'factor';

export function middleware(route: RouteType, type: MiddlewareType[]) {
  const middleware = [...(route.middleware || []), ...type];
  return Object.assign(route, { middleware });
}

export function Loader({ route }: any) {
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