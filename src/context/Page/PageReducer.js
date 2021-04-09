import {FETCHING, GET_CATS} from "../types";

export const PageReducer = (state, action) => {
    switch (action.type) {
        case GET_CATS:
            return {...state,cats: [...state.cats, ...action.cats]};
        case FETCHING:
            return {...state, fetching: action.fetching};
        default:
            return state;
    }
}