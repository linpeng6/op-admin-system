import { Component } from 'react';
import filterTree from './filterTree';

export default class Menus extends Component<{ options: any[] }> {
  constructor(props: { options: any[] }) {
    super(props);
  }

  getOption = (option: any, index: number) => {
    let menuItemCls = `ant-cascader-menu-item`;
    /** icon */
    let expandIcon = null;
    const hasChildren = option?.children?.length > 0;
    if (hasChildren) {
      menuItemCls = `ant-cascader-menu-item-expand`;
      expandIcon = (
        <span className="ant-cascader-menu-item-expand-icon">{'>'}</span>
      );
    }
    return (
      <li
        key={option.value}
        className={menuItemCls}
        title={option?.label}
        role={'menuitem'}
      >
        {option.label}
      </li>
    );
  };

  getActiveOptions = (values?: any) => {
    const { options } = this.props;
    const activeValue = values || [];
    const result = filterTree(
      options,
      (item, level) => item.value === activeValue[level],
    );
    return result;
  };

  getShowOptions = () => {
    const { options } = this.props;
    debugger;
    const result = this.getActiveOptions()
      .map((activeOption) => activeOption.children)
      .filter((activeOption) => !!activeOption);
    result.unshift(options);
    return result;
  };
  render() {
    return (
      <div>
        {this.getShowOptions().map((options, menuIndex) => (
          <ul className="ant-cascader-menu" key={menuIndex}>
            {options.map((option: any) => this.getOption(option, menuIndex))}
          </ul>
        ))}
      </div>
    );
  }
}
