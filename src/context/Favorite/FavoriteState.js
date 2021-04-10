import React, {useReducer} from 'react';
import {FavoriteReducer} from "./FavoriteReducer";
import {FETCHING, GET_FAVORITE_CATS } from "../types";
import {catsAPI} from "../../api/api";
import {FavoriteContext} from "./FavoriteContext";

export const FavoriteState = (props) => {
    let initialState = {
        favoriteCats: [{ id: "438", url: "https://cdn2.thecatapi.com/images/438.jpg", width: 500, height: 333}],
        fetching: true
    };
    const [state, dispatch] = useReducer(FavoriteReducer, initialState)


    const setCats = (cats) => ({
        type: GET_FAVORITE_CATS,
        cats
    })
    const updateFetching = (fetching) => ({
        type: FETCHING,
        fetching
    })

    const setFetching = (fetching) => {
        dispatch(updateFetching(fetching))
    }

    const getFavoriteCats= () => {

        catsAPI.getFavoriteCats().then(response => {
            dispatch(setCats(response.data));

        }).finally(()=> {
            dispatch(updateFetching(false))
        });

    }
    catsAPI.setFavoriteCat()
    return (
        <FavoriteContext.Provider value={{
            state, getFavoriteCats, setFetching
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}