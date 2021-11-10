import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'umi';
import { routeWhiteList } from '../../config/globalConfig';
import BasicLayout from './basicLayout';
import { changeRoute } from '@/redux/action/menu';
import { RootState } from '@/redux/interface';
const entry: React.FC = (props: any) => {
  const { location, history } = props;
  const dispatch = useDispatch();

  const { menuList, tabMenus, selectedKey } = useSelector(
    (state: RootState) => state.menu,
  );
  const listenRoute = (pathname: string) => {
    dispatch(changeRoute(pathname, dispatch));
  };
  useEffect(() => {
    // 监听路由的变化
    history.listen((location: any, action: any) => {
      // 路由变更
      listenRoute(location.pathname);
    });
  }, []);

  const isNoLayout: boolean = useMemo(() => {
    let len = routeWhiteList.length;
    for (let i = 0; i < len; i++) {
      if (location.pathname.startsWith(routeWhiteList[i])) return true;
    }
    return false;
  }, [location]);
  return (
    <>
      {
        // location.pathname !== '/login' ?
        location.pathname === '/login' ? (
          <Redirect to="/login" />
        ) : (
          <>{isNoLayout ? <>{props.children}</> : <BasicLayout {...props} />}</>
        )
      }
    </>
  );
};

export default entry;
