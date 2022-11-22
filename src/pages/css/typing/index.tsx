import React from 'react';
import { Card } from 'antd';
import './index.less';

const index: React.FC<{}> = () => {
  return (
    <Card>
      <div className="css-typing">
        <div className="css-typing-effect">typing effect for text</div>
      </div>
    </Card>
  );
};
export default index;
