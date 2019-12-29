import * as types from "../action-types";

let initState = {user: null, error: null};

export default function (state = initState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, user: action.user, error: null};
        case types.LOGIN_FAIL:
            return {...state, user: null, error: action.error};
        case types.LOGOUT_SUCCESS:
            return {...state, user: null, error: null};
        case types.REGISTER_SUCCESS:
            return {...state, error: null};
        case types.REGISTER_FAIL:
            return {...state, user: null, error: action.error};
        default:
            return state;
    }

}