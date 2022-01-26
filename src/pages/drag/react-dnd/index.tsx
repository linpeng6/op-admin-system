import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Trello from '@comp/dnd/dnd-trello';
import './index.less';
const index: React.FC<{}> = () => {
  return (
    <div className="drag-react-dnd">
      <DndProvider backend={HTML5Backend}>
        <Trello />
      </DndProvider>
    </div>
  );
};

export default index;
