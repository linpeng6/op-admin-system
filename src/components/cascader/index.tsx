import React, { Component } from 'react';

import Trigger from 'rc-trigger';
import Menus from './Menus';

const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
};

class Cascader extends Component<
  { options: any[] },
  { popupVisible: boolean }
> {
  constructor(props: { options: any[] }) {
    super(props);
    this.state = {
      popupVisible: false,
    };
  }

  render() {
    const { options } = this.props;
    const { popupVisible } = this.state;
    let popupNode = <Menus options={options} />;
    return (
      <Trigger
        popupPlacement="bottomLeft"
        builtinPlacements={BUILT_IN_PLACEMENTS}
        action={['click']}
        popupVisible={popupVisible}
        onPopupVisibleChange={(val: boolean) =>
          this.setState({ popupVisible: val })
        }
        popupClassName={`ant-cascader-menus ${
          popupVisible ? '' : 'ant-cascader-menus-hidden'
        }`}
        popup={popupNode}
      >
        <div
          style={{ width: '400px' }}
          className={`ant-select ant-select-multiple ${
            popupVisible ? 'ant-select-open ant-select-focus' : ''
          }`}
        >
          <div className={`ant-select-selector`}></div>
        </div>
      </Trigger>
    );
  }
}

export default Cascader;
