import {post} from './index';

function addArticle(body) {
    return post('/articles/add', body).then(response => response.data);
}

export default {
    addArticle
}