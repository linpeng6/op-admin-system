import React from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Entry from './entry';
import '@/styles/index.less';

const index: React.FC<any> = (props) => {
  return (
    <Provider store={store}>
      <Entry {...props} />
    </Provider>
  );
};

export default index;
