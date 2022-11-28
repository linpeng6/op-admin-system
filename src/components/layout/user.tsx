import React from 'react';
import { Avatar } from 'antd';
import Clown from '@/assets/imgs/clown.png';

const User: React.FC = (props: any) => {
  return (
    <div className="user">
      <Avatar src={Clown} />
      <span className="username">admin</span>
    </div>
  );
};

export default User;
