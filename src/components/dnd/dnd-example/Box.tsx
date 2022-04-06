import { CSSProperties } from 'react';
import { useDrag } from 'react-dnd';

const style: CSSProperties = {
  height: 32,
  display: 'inline-block',
  padding: '4px 15px',
  border: '1px solid #ddd',
  borderRadius: '2px',
  background: 'white',
  cursor: 'move',
};

const Box = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Box',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} style={{ ...style, opacity: isDragging ? 0.5 : 1 }}>
      可拖拽的box
    </div>
  );
};

export default Box;
