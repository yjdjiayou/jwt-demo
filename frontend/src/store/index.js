import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

let router = routerMiddleware(history);
let sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware, router, logger));
sagaMiddleware.run(rootSaga);
window.store = store;
export default store;