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
            // Добавляем данные favourites images
            // Получаем количество элементов - сколько всего

        }).finally(()=> {
            setFetching(false)
            // Останавливаем подгруз данных

        });
    }

    const setFavoriteCat = (id) => {
        catsAPI.setFavoriteCat(id)
        setTimeout(()=> {
            catsAPI.getFavoriteCatsForSet().then(response => {
                dispatch(setCat(response.data[response.data.length - 1]))
                // Добавлям в локальный state последний элемент массива из favourites

            }).catch((err)=>{
                console.log(err)})
        }, 500)
        //
        // Было необходимо подождать 0.5 сек, чтобы корректно отпрвить post запрос, и получить данные
    }

    const deleteCat = (id) => {
        catsAPI.deleteCat(id)
        dispatch(deleteCatState(id))
    }
    //Удаляем картинку локально и делаем delete запрос

    return (
        <FavoriteContext.Provider value={{
            state, getFavoriteCats, setFetching, setFavoriteCat, deleteCat
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
