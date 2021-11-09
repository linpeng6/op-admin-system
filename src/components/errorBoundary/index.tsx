import React from 'react';
import { message } from 'antd';
/**
 * 错误边界
 * errorBoundary
 */
class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    message.error('error');
  }

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
