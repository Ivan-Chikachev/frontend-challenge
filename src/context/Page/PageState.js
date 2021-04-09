import React, {useReducer} from 'react';
import {PageReducer} from "./PageReducer";
import {FETCHING, GET_CATS, SET_CATS} from "../types";
import {catsAPI} from "../../api/api";
import {PageContext} from "./PageContext";

export const PageState = (props) => {
    let initialState = {
        cats: [],
        fetching: true
    };
    const [state, dispatch] = useReducer(PageReducer, initialState)


    const setCats = (cats) => ({
        type: GET_CATS,
        cats
    })
    const setFetching = (fetching) => ({
        type: FETCHING,
        fetching
    })

    const getCats = () => {

        catsAPI.getCats().then(response => {
            dispatch(setCats(response.data));
        }).finally(()=> {
            setFetching(false)
            console.log(state.fetching)
        });

    }
    return (
        <PageContext.Provider value={{
            state, getCats, setFetching
        }}>
            {props.children}
        </PageContext.Provider>
    )
}