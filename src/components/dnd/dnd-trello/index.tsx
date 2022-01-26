import React, { useState } from 'react';
import boardData from './data';
import { BoardModel } from './interface';
const index: React.FC<{}> = () => {
  const [boardList, setBoardList] = useState<BoardModel[]>(boardData);
  return <div>{boardList.map((item, index) => {})}</div>;
};

export default index;
