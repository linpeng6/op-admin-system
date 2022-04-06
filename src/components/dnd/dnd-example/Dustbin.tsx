import { CSSProperties } from 'react';
import { useDrop } from 'react-dnd';

const style: CSSProperties = {
  width: 400,
  height: 400,
  margin: '20px 0',
  border: '1px solid #ddd',
};
const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'Box',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const backgroundColor = isOver ? 'pink' : 'white';
  return (
    <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

export default Dustbin;
