import {FETCHING, GET_FAVORITE_CATS} from "../types";

export const FavoriteReducer = (state, action) => {
    switch (action.type) {
        case GET_FAVORITE_CATS:
            return {...state,favoriteCats: [...state.favoriteCats, ...action.cats]};
        case FETCHING:
            return {...state, fetching: action.fetching};
        default:
            return state;
    }
}