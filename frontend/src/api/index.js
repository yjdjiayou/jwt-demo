import axios from 'axios';
import history from '../history';

const BASE_URL = 'http://localhost:8080';

//拦截器，在向后台发出请求的时候，可以动态的修改配置
// $.ajax({url,method,headers})
axios.interceptors.request.use((config) => {
    let jwtToken = window.localStorage.getItem('jwtToken');
    if (jwtToken) {
        config.headers.authorization = jwtToken;
    }
    return config;
});

axios.interceptors.response.use(res => {
    if (res.data.code !== 0) {
        return Promise.reject(res.data.error);
    }
    return res;
}, error => {
    if (error.response.status >= 400 && error.response.status > 500) {
        history.push('/users/login');
    }
    return Promise.reject(error.response.data.error);
});

export function post(url, body) {
    return axios.post(BASE_URL + url, body);
}