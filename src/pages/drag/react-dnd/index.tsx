import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Example from '@comp/dnd/dnd-example';
import './index.less';
const index: React.FC<{}> = () => {
  return (
    <div className="drag-react-dnd">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
};

export default index;
