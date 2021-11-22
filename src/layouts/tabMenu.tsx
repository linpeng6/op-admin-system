import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuOption, MenuItem, RootState } from '@/redux/interface';
import { changeSelectKey, changeTabMenus } from '@/redux/action/menu';
import { history } from 'umi';
import { HomeOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

const activeClassName = 'tabs-item-active';

const index: React.FC = () => {
  const { menuTree, tabMenus, selectedKey } = useSelector(
    (state: RootState) => state.menu,
  );
  const dispatch = useDispatch();
  const tabsRef = useRef<HTMLDivElement>(null);
  const [leftDist, setLeftDis] = useState<number>(0);

  useEffect(() => {
    const index = tabMenus.findIndex((item) => item.path === selectedKey);
    if (index === -1) return;
    handleTabVisibility();
  }, [selectedKey]);

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

  const menu = (
    <Menu>
      <Menu.Item key="close-other">
        <div>关闭其它标签</div>
      </Menu.Item>
      <Menu.Item key="close-all">
        <div>关闭所有标签</div>
      </Menu.Item>
    </Menu>
  );

  /**
   * 处理tab滚动
   * @param e wheelEvent
   */
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log(e);
    if (!tabsRef.current) return;
    const delta = e.deltaY || 0;
    let dist = 0;
    // 鼠标滚轮向上滚动,deltaY < 0
    if (delta > 0) {
      dist = Math.min(0, leftDist + delta);
    }
    // TODO
    setLeftDis(dist);
  };

  const handleTabVisibility = () => {
    if (!tabsRef.current) return;
    const tabs = Array.from(tabsRef.current.children) || [];
    const activeTab = tabs.find(
      (item) => item && item.className.includes(activeClassName),
    ) as HTMLElement | undefined;
    if (!activeTab) return;
    let value = 0;
    const { offsetLeft, offsetWidth } = activeTab;
    if (offsetLeft < -leftDist) {
      // 当前选择tab的offsetLeft小于偏移距离(即tab在可视区域左侧)
      value = -offsetLeft + 10;
    }
    // TODO
    setLeftDis(value);
  };
  return (
    <div className="tabs-menu-layout">
      <div className="tabs-menu-container">
        {home && (
          <div
            onClick={() => {
              clickTabItem(home);
            }}
            className={`tabs-home ${
              selectedKey === home.path ? activeClassName : ''
            }`}
          >
            <HomeOutlined className="fs18" />
          </div>
        )}
        <div className="tabs-menu-wrapper" onWheel={handleScroll}>
          <div
            className="tabs-menu-content"
            style={{ transform: `translate(${leftDist}px,0)` }}
            ref={tabsRef}
          >
            {tabMenus.map((item) => {
              if (home && item.path === home.path) {
                return null;
              }
              return (
                <div
                  key={item.name}
                  className={`tabs-item ${
                    selectedKey === item.path ? activeClassName : ''
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
        <Dropdown overlay={menu} trigger={['click']}>
          <MenuOutlined className="tabs-menu-icon-close" />
        </Dropdown>
      </div>
    </div>
  );
};

export default index;
