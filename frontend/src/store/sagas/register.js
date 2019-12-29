import {takeEvery, put, call, all, race} from 'redux-saga/es/effects';
import * as types from '../action-types';
import userApi from '../../api/user';
import {push} from 'react-router-redux';

function* register(action) {
    let { payload } = action;
    try {
        let response = yield call(userApi.register, payload);
        let username = response.data.username;
        if(username){
            yield put({ type: types.REGISTER_SUCCESS});
            yield put(push('/users/signin'));
        }
    } catch (error) {
        yield put({ type: types.REGISTER_FAIL, error });
    }
}

export function* watchRegister() {
    yield takeEvery(types.REGISTER, register);
}

