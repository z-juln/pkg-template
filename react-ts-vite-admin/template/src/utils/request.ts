import { message, notification } from 'antd';
import axios from 'axios';

const { DEV } = import.meta.env;

const PROD_BASE_URL = `${window.location.origin}/admin/api/<%= changeCase(name, 'kebab') %>`;

const request = axios.create({
  baseURL: DEV ? '/admin-api' : PROD_BASE_URL,
  timeout: 50000,
  withCredentials: true,
});

const notificationKey = 'response-error';
request.interceptors.response.use(
  (response) => {
    const {
      data: { code, status, msg },
    } = response;
    if (status || [500].includes(code)) {
      message.error(msg);
      return Promise.reject(msg);
    }
    return response.data;
  },
  (error) => {
    const { status } = error.response.data;
    if (status === 401) {
      notification.error({
        key: notificationKey,
        message: '未登录或登录已过期，请重新登录',
      });
      if (!DEV) {
        location.href = `${document.location.origin}/login`;
      }
    } else if (status === 403) {
      notification.error({
        key: notificationKey,
        message: '没有权限访问',
      });
    } else {
      notification.error({
        key: notificationKey,
        message: error.message,
      });
    }
    return Promise.reject(error);
  },
);
