import { useLocation, useNavigate } from 'react-router-dom';
import { RouteType } from '~/models/RouteType';
import * as R from 'ramda';
import useSWR from 'swr';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import clsx from 'clsx';
function LNB() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: routes = [] } = useSWR('route://service');

  const nav = R.find((v: RouteType) =>
    new RegExp(`^${v.path}`).test(location.pathname)
  )(routes);

  const handleClick = (url: string) => {
    navigate(url);
  };

  //* 메뉴 아이템에 active class 추가
  return routes ? (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {(routes || []).map((item: RouteType, i: number) => {
        return (
          <TreeItem
            key={item.path}
            nodeId={Math.random().toString()}
            label={item.label}
            className={clsx(nav?.path === item.path && 'active')}
          >
            {(item.children || []).map((item: RouteType, k: number) => {
              return (
                <TreeItem
                  key={item.path}
                  nodeId={Math.random().toString()}
                  label={item.label}
                  className={clsx(location?.pathname === item.path && 'active')}
                  onClick={handleClick.bind(null, item.path!)}
                ></TreeItem>
              );
            })}
          </TreeItem>
        );
      })}
    </TreeView>
  ) : null;
}

export default LNB;
