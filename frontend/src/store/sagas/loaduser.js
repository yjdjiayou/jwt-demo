import {takeEvery, put, call, all} from 'redux-saga/es/effects';
import * as types from '../action-types';
import {decode} from '../../utils/jwt';
import {push} from 'react-router-redux';

function* loadUser() {
    let jwtToken = window.localStorage.getItem('jwtToken');
    if (jwtToken) {
        let user = decode(jwtToken);
        yield put({ type: types.LOGIN_SUCCESS, user });
        yield put(push('/'));
    }
}
export  function* watchLoadUser() {
    yield takeEvery(types.LOAD_USER, loadUser);
}