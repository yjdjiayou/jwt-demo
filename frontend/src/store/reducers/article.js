import * as types from "../action-types";

let initState = {error: null};
export default function (state = initState, action) {
    switch (action.type) {
        case types.ADD_ARTICLE_FAIL:
            return {...state, error: action.error};
        case types.ADD_ARTICLE_SUCCESS:
            return {...state, error: null};
        default:
            return state;
    }

}