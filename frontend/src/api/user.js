import {post} from './index';

function login(body) {
    return post('/users/signin', body).then(response => response.data);
}

function register(body) {
    return post('/users/signup', body).then(response => response.data);
}

export default {
    login,
    register
}