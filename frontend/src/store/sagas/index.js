import {takeEvery, put, call, all, race} from 'redux-saga/es/effects';
import {loginFlow} from "./login";
import {watchLoadUser} from "./loaduser";
import {watchAddArticle} from "./article";
import {watchRegister} from "./register";


export default function* rootSaga() {
    yield all([loginFlow(), watchRegister(), watchLoadUser(), watchAddArticle()]);
}