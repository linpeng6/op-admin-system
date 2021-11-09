import React from 'react';
import User from '@comp/layout/user';

const index: React.FC = () => {
  return (
    <div className="headerBlock">
      {
        //...根据需要自行添加修改
      }
      <div style={{ flex: 1 }}></div>
      <div className="headerRight">
        <User />
      </div>
    </div>
  );
};

export default index;
