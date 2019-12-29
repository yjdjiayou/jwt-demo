import {takeEvery, put, call, all} from 'redux-saga/es/effects';
import * as types from '../action-types';
import articleApi from '../../api/article';
import {push} from 'react-router-redux';

function* addArticle(action) {
    let { payload } = action;//{title,content}
    try {
        let response = yield call(articleApi.addArticle, payload);
        yield put({ type: types.ADD_ARTICLE_SUCCESS });
        yield put(push('/'));
    } catch (error) {
        yield put({ type: types.ADD_ARTICLE_FAIL, error });
    }
}
export function* watchAddArticle() {
    yield takeEvery(types.ADD_ARTICLE, addArticle);
}