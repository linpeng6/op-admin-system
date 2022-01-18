import React from 'react';
import './index.less';
const index: React.FC<{}> = () => {
  const onDragStart = (ev: React.DragEvent) => {
    // 设置被拖动数据的数据类型和值
    ev.dataTransfer.setData('text', 'html_drag_p');
  };

  const onDragOver = (ev: React.DragEvent) => {
    ev.preventDefault();
  };

  const onDrop = (ev: React.DragEvent) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const target = ev.target as any;
    target.appendChild(document.getElementById(data));
  };
  return (
    <div className="drag-html-draggable">
      <h2 className="drag-html-draggable-title">
        How To Use The HTML Drag-And-Drop API In React
      </h2>
      <section className="drag-html-draggable-content">
        <section>
          <p id="html_drag_p" draggable={true} onDragStart={onDragStart}>
            这是一个可以拖拽的段落
          </p>
        </section>
        <section className="flex">
          <div
            style={{ flex: 1 }}
            onDragOver={onDragOver}
            onDrop={onDrop}
          ></div>
        </section>
      </section>
    </div>
  );
};

export default index;
