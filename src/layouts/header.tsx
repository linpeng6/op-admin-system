import React from 'react';
import User from '@/components/layout/User';

const index: React.FC = () => {
  return (
    <div className="header-block">
      {
        //...根据需要自行添加修改
      }
      <div style={{ flex: 1 }}></div>
      <div className="header-right">
        <User />
      </div>
    </div>
  );
};

export default index;
