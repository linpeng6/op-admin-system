import React, { useState } from 'react';
import { Table } from 'antd';
import Container from '@comp/layout/container';
const index: React.FC<{}> = () => {
  const [inputValue, setInputValue] = useState<String>('');
  return (
    <Container>
      <Table />
    </Container>
  );
};

export default index;
