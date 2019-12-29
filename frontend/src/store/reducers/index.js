import {combineReducers} from 'redux';
import user from './user';
import article from './article';
import {routerReducer} from 'react-router-redux';

let reducers = combineReducers({
    user,
    article,
    router: routerReducer
});
export default reducers;