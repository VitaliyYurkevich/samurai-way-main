import {ActionDispatchTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {fchmod} from "fs";


export const SET_USER_DATA = 'SET_USER_DATA'

export type setUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userId: string,
        email: string,
        login: string,
        isAuth: boolean
    }
}

//type DataType

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthPageType = typeof initialState


const authReducer = (state:AuthPageType = initialState, action: ActionDispatchTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setAuthUserDataAC = (userId: null, email: null, login: null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    } as const
}
export const getAuthUserDataTC = () => (dispatch: Dispatch) =>  {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {userId, email, login} = response.data
               dispatch(setAuthUserDataAC(userId, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
               // @ts-ignore
                dispatch(getAuthUserDataTC())
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

export default authReducer