import {
    ADD_POST,
    SET_STATUS,
    SET_USERS_PROFILE

} from "../types";

export const PageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                Name: 'Kitty Kat',
                text: action.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}