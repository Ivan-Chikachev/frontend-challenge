import {DELETE_CAT, FETCHING, GET_FAVORITE_CATS, SET_FAVORITE_CAT, SET_TOTAL_CATS, SET_TOTAL_COUNT} from "../types";

export const FavoriteReducer = (state, action) => {
    switch (action.type) {
        case GET_FAVORITE_CATS:
            return {...state, favoriteCats: [...state.favoriteCats, ...action.cats]};
        case FETCHING:
            return {...state, fetching: action.fetching};
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.count};
        case SET_FAVORITE_CAT:
            return {...state, favoriteCats: action.cat};
        case DELETE_CAT:
            return {...state, favoriteCats: state.favoriteCats.filter(item => item.id !== action.id)};
        default:
            return state;
    }
}