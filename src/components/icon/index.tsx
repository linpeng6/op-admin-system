import React, { CSSProperties } from 'react';
import * as Icon from '@ant-design/icons';

interface IconProps {
  icon: string;
  className?: string;
  style?: CSSProperties;
}

const index: React.FC<IconProps> = (props) => {
  const { icon, ...restProps } = props;
  return React.createElement(Icon[icon as keyof typeof Icon] as any, {
    ...restProps,
  });
};

export default index;
