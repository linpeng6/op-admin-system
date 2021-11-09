import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/interface';
import { changeSelectKey } from '@/redux/action/menu';
import { history } from 'umi';
const index: React.FC = () => {
  const { tabMenus, selectedKey } = useSelector(
    (state: RootState) => state.menu,
  );
  const dispatch = useDispatch();
  return (
    <div className="tab-menu-layout">
      <div className="flex height-100 ">
        {tabMenus.map((item, index) => {
          return (
            <div
              key={item.name}
              className={`tabs-item ${
                selectedKey === item.path ? 'tabs-item-active' : ''
              }`}
              onClick={() => {
                dispatch(changeSelectKey(item.path));
                history.push(item.path);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
