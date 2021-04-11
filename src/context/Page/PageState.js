import React, {useReducer} from 'react';
import {PageReducer} from "./PageReducer";
import {FETCHING, GET_CATS} from "../types";
import {catsAPI} from "../../api/api";
import {PageContext} from "./PageContext";

export const PageState = (props) => {
    let initialState = {
        cats: [],
        fetching: true
    };
    const [state, dispatch] = useReducer(PageReducer, initialState)


    const getCatsState = (cats) => ({
        type: GET_CATS,
        cats
    })
    const updateFetching = (fetching) => ({
        type: FETCHING,
        fetching
    })

    const setFetching = (fetching) => {
        dispatch(updateFetching(fetching))
    }

    const getCats = () => {

        catsAPI.getCats().then(response => {
            dispatch(getCatsState(response.data));

        }).finally(()=> {
            setFetching(false)
        });
        // Получаем данные и останавливаем подгруз данных

    }
    return (
        <PageContext.Provider value={{
            state, getCats, setFetching
        }}>
            {props.children}
        </PageContext.Provider>
    )
}