import React from 'react';
import { Avatar } from 'antd';

const index: React.FC = (props: any) => {
  return (
    <div className="user">
      <Avatar />
      <span className="username">{'riper'}</span>
    </div>
  );
};

export default index;
