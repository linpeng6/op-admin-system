import React, { useMemo } from 'react';
import { Redirect } from 'umi';
import { routeWhiteList } from '../../config/globalConfig';
import BasicLayout from './basicLayout';

const entry: React.FC = (props: any) => {
  const { location } = props;

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
