import {takeEvery, put, call, all} from 'redux-saga/es/effects';
import * as types from '../action-types';
import userApi from '../../api/user';
import {decode} from '../../utils/jwt';
import {push} from 'react-router-redux';

function* login(action) {
    let { payload } = action;
    try {
        let response = yield call(userApi.login, payload);
        let jwtToken = response.data.jwtToken;
        // 把得到的 token 保存在本地硬盘上
        window.localStorage.setItem('jwtToken', jwtToken);
        let user = decode(jwtToken);
        yield put({ type: types.LOGIN_SUCCESS, user });
        yield put(push('/'));
    } catch (error) {
        yield put({ type: types.LOGIN_FAIL, error });

    }
}

function* logout() {
    window.localStorage.removeItem('jwtToken');
    yield put({ type: types.LOGOUT_SUCCESS });
    yield put(push('/users/signin'))
}

export function* loginFlow() {
    yield takeEvery(types.LOGIN, login);
    yield takeEvery(types.LOGOUT, logout);
}