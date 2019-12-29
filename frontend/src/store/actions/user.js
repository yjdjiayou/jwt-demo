import * as types from '../action-types';

export default {
    login(payload) {
        return {type: types.LOGIN, payload};
    },
    logout() {
        return {type: types.LOGOUT};
    },
    register(payload) {
        return {type: types.REGISTER, payload};
    },
    loadUser() {
        return {type: types.LOAD_USER};
    }
}