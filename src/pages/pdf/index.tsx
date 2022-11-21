import React from 'react';
import './index.less';

const index: React.FC = () => {
  const src =
    'http://localhost:8000/pdfjs/web/compressed.tracemonkey-pldi-09.pdf';

  return (
    <div className="pdf">
      <iframe
        width={'100%'}
        height={'100%'}
        src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(src)}`}
      />
    </div>
  );
};

export default index;
