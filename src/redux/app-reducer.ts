import React from "react";
import {ActionDispatchTypes} from "./redux-store";


export const INITIALIZED_SUCCESS = "SET_INITIALIZED"

export type setInitializedType = {
    type: typeof INITIALIZED_SUCCESS
    initialized: boolean
}

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionDispatchTypes) => {
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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initialize = () => () => {
    
}