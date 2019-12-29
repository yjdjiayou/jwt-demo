import * as types from '../action-types';

export default {
    addArticle(payload) {
        return {type: types.ADD_ARTICLE, payload};
    }
}