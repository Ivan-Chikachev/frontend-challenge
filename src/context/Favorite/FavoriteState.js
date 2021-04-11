import React, {useReducer} from 'react';
import {FavoriteReducer} from "./FavoriteReducer";
import {DELETE_CAT, FETCHING, GET_FAVORITE_CATS, SET_FAVORITE_CAT, SET_TOTAL_COUNT} from "../types";
import {catsAPI} from "../../api/api";
import {FavoriteContext} from "./FavoriteContext";

export const FavoriteState = (props) => {
    let initialState = {
        favoriteCats: [],
        fetching: true,
        totalCount: 0,
    };
    const [state, dispatch] = useReducer(FavoriteReducer, initialState)


    const getCats = (cats) => ({
        type: GET_FAVORITE_CATS,
        cats
    })
    const updateFetching = (fetching) => ({
        type: FETCHING,
        fetching
    })
    const setTotalCount = (count) => ({
        type: SET_TOTAL_COUNT,
        count
    })
    const deleteCatState = (id) => ({
        type: DELETE_CAT,
        id
    })

    const setCat = (cat) => ({
        type: SET_FAVORITE_CAT,
        cat
    })

    const setFetching = (fetching) => {
        dispatch(updateFetching(fetching))
    }

    const getFavoriteCats= (page) => {
        catsAPI.getFavoriteCats(page).then(response => {
            dispatch(getCats(response.data));
            dispatch(setTotalCount(response.headers['pagination-count']))
        }).finally(()=> {
            dispatch(updateFetching(false))
        });
    }

    const setFavoriteCat = (id) => {
        catsAPI.setFavoriteCat(id)
        setTimeout(()=> {
            catsAPI.getFavoriteCatsForSet().then(response => {
                dispatch(setCat(response.data[response.data.length - 1]))
            }).catch((err)=>{
                console.log(err)})
        }, 500)

    }

    const deleteCat = (id) => {
        catsAPI.deleteCat(id)
        dispatch(deleteCatState(id))
    }

    return (
        <FavoriteContext.Provider value={{
            state, getFavoriteCats, setFetching, setFavoriteCat, deleteCat
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}