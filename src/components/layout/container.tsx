import React from 'react';

const Container: React.FC = (props: any) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
