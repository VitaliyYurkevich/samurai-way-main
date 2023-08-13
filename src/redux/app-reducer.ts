import React from "react";
import {ActionDispatchTypes} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";
import {AnyAction, Dispatch} from "redux";


export const INITIALIZED_SUCCESS = "SET_INITIALIZED"

export type setInitializedType = {
    type: typeof INITIALIZED_SUCCESS
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionDispatchTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = ()=> ({type: INITIALIZED_SUCCESS})

export const initializeApp = ()  => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
   Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}