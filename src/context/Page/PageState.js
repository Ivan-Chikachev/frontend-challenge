import React, {useReducer} from 'react';
import {PageReducer} from "./PageReducer";
import {
    ADD_POST, SET_STATUS, SET_USERS_PROFILE
} from "../types";
import {profileAPI} from "../../api/api";
import {PageContext} from "./PageContext";

export const PageState = (props) => {
    let initialState = {
        posts: [
            {
                id: 1,
                Name: 'Cat',
                text: 'Я уронил елку)',
            },
        ],
        profile: null,
        status: '',
    };
    const [state, dispatch] = useReducer(PageReducer, initialState)


    const addPost = (newPostText) => ({type: ADD_POST, newPostText});
    const setUsersProfile = (profile) => ({
        type: SET_USERS_PROFILE,
        profile
    })
    const setStatus = (status) => ({
        type: SET_STATUS,
        status
    });

    const getStatus = (userId) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response.data));
        })
    };
    const updateStatus = (status) => {

        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resulCode === 0) {
                dispatch(setStatus(status));
            }
        })
    };

    const getProfile = (userId) => {

        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUsersProfile(response.data));
        });

    }
    return (
        <PageContext.Provider value={{
            state, getProfile, updateStatus, getStatus, addPost
        }}>
            {props.children}
        </PageContext.Provider>
    )
}