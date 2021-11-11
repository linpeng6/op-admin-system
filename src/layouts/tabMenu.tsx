import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuOption, MenuItem, RootState } from '@/redux/interface';
import { changeSelectKey, changeTabMenus } from '@/redux/action/menu';
import { history } from 'umi';
import { HomeOutlined, CloseOutlined } from '@ant-design/icons';

const index: React.FC = () => {
  const { menuTree, tabMenus, selectedKey } = useSelector(
    (state: RootState) => state.menu,
  );
  const dispatch = useDispatch();

  const clickTabItem = (item: MenuItem | MenuOption) => {
    dispatch(changeSelectKey(item.path));
    history.push(item.path);
  };

  const removeTabItem = ({ path }: MenuItem) => {
    //close current tab
    if (path === selectedKey) {
      const removeIndex = tabMenus.findIndex((item) => item.path === path);
      if (removeIndex === 0) {
        const nextItem = tabMenus[removeIndex + 1];
        history.push(nextItem ? nextItem.path : home?.path);
      } else {
        const preItem = tabMenus[removeIndex - 1];
        history.push(preItem.path);
      }
    }
    const newTabMenus = tabMenus.filter((item) => item.path !== path);
    dispatch(changeTabMenus(newTabMenus));
  };
  const home = useMemo(() => {
    return menuTree && menuTree[0];
  }, [menuTree]);
  return (
    <div className="tab-menu-layout">
      <div className="flex height-100 ">
        {home && (
          <div
            onClick={() => {
              clickTabItem(home);
            }}
            className={`tabs-home ${
              selectedKey === home.path ? 'tabs-item-active' : ''
            }`}
          >
            <HomeOutlined className="fs18" />
          </div>
        )}
        {tabMenus.map((item) => {
          if (home && item.path === home.path) {
            return null;
          }
          return (
            <div
              key={item.name}
              className={`tabs-item ${
                selectedKey === item.path ? 'tabs-item-active' : ''
              }`}
              onClick={() => {
                clickTabItem(item);
              }}
            >
              {item.name}
              <CloseOutlined
                className="tabs-item-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTabItem(item);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
