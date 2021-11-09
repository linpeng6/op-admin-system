import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
});

//请求拦截
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//响应拦截
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      //dosomething
    }
    return res;
  },
  (error) => {
    // const { response } = error;
    // let msg;
    // let statusCode;
    // if (response && response instanceof Object) {
    //     const { success, data, statusText } = response;
    //     if (success) {
    //         return Promise.reject(response);
    //     }
    //     statusCode = response.status;
    //     msg = data.error || statusText;
    // } else {
    //     statusCode = 600;
    //     msg = error.note || '请求超时';
    // }
    // if (statusCode === 900) {
    //     console.log('Authorization', localStorage.token);
    //     msg = '会话过期';
    //     sessionStorage.setItem('userInfo', ''); // 清空会话
    //     // window.sessionStorage.setItem('loginStatus', '-1'); // 登录状态为未登录
    //     if (window.location.href.indexOf('/login') === -1) {
    //         // history.push('/login');
    //         window.top.location.href = '/#/login';
    //     }
    // }
    // // message.error(msg, /* duration */3);
    // // alertMessage({
    // //     variant: 'error',
    // //     text: msg,
    // // });
    //return Promise.reject({ success: false, statusCode, message: msg });
    return Promise.reject(error);
  },
);

export default instance;
