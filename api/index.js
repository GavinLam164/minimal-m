
import axios from 'axios';
import qs from 'qs'

let baseURL = '';
if(process.browser) {
    baseURL = '/api'
}else {
    baseURL = 'http://localhost:8201'
}
const instance = axios.create({
  baseURL,
  withCredentials: true,
});

instance.defaults.transformRequest = [
  (param, headers) => {
    switch (headers['Content-Type']) {
      case 'application/x-www-form-urlencoded':
        return qs.stringify(param);
      case 'application/json':
        return JSON.stringify(param);
      default:
        return param;
    }
  },
];
instance.interceptors.response.use((resp)=> {
    const { data } = resp;
    if (data.code !== 200) {
      Notification.error(data.msg);
      throw new Error(data.msg);
    }
    return data;
  }, (err) => {
    Promise.reject(err);
  });

instance.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const get = (url, params, option) => instance.get(url, { params, ...option });
export const post = (url, params, option) => instance.post(url, params, option);
export default {};
