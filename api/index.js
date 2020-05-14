
import axios from 'axios';
import Cookie from 'js-cookie'
import qs from 'qs'

const getCookie = (key, req) => {
  if (req) {
    return req.cookies[key]
  }
  return Cookie.get(key)
}


let baseURL = '';
if(process.browser) {
    baseURL = '/api'
}else {
    baseURL = 'http://192.168.56.102:8201'
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
let req = null;
export const setRequest = (request) => {
  req = request
}
instance.interceptors.request.use((config) => {
  const token = getCookie('webToken', req)
  const headers = { ...config.headers };
  headers.token = token
  return {
    ...config,
    headers
  }
})
instance.interceptors.response.use((resp)=> {
    const { data } = resp;
    if (data.code !== 200) {
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
