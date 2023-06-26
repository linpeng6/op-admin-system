import React, { createContext } from 'react';
import omit from '../_util/omit';
import { ConfigProviderProps } from './interface';

const defaultProps = {
  prefixCls: 'op',
};

export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'op'}-${componentName}`,
  ...defaultProps,
});

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, prefixCls } = props;

  const getPrefixCls = (componentName: string, customPrefix?: string) => {
    return `${customPrefix || prefixCls}-${componentName}`;
  };

  const config = {
    ...omit(props, ['children']),
    getPrefixCls,
  };
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};

export default ConfigProvider;

export { ConfigProviderProps };
