import {ActionDispatchTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: ActionDispatchTypes) => {
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


export const setAuthUserDataAC = (userId: null, email: null, login: null) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const

}
export const getAuthUserDataTC = () => (dispatch: Dispatch) =>  {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {userId, email, login} = response.data
               dispatch(setAuthUserDataAC(userId, email, login))
            }
        })

}

export default authReducer