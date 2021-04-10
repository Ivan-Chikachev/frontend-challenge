import React, {useReducer} from 'react';
import {FavoriteReducer} from "./FavoriteReducer";
import {FETCHING, GET_FAVORITE_CATS } from "../types";
import {catsAPI} from "../../api/api";
import {FavoriteContext} from "./FavoriteContext";

export const FavoriteState = (props) => {
    let initialState = {
        favoriteCats: [],
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

    const setFavoriteCat = (id) => {
        catsAPI.setFavoriteCat(id)
        console.log(id)
    }
    const deleteCat = (id) => {
        catsAPI.deleteCat(id)
    }

    return (
        <FavoriteContext.Provider value={{
            state, getFavoriteCats, setFetching, setFavoriteCat, deleteCat
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}