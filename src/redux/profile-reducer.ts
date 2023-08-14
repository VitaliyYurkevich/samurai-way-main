import React from 'react';
import {ActionDispatchTypes} from "./redux-store";
import post from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST"
export const SET_USER_PROFILE = "SET_USER_PROFILE"
export const SET_STATUS = "SET_STATUS"

export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export type addPostType = {
    type: typeof ADD_POST
    newPostText: string
}

export type setStatusType = {
    type: typeof SET_STATUS
    status: any
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const setUserProfileAC = (profile: string) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
export const setStatusAC = (status: any) => {
    return {
        type: SET_STATUS,
        status: status
    } as const
}
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then( response => {
            dispatch(setUserProfileAC(response.data))
        }
    )
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then( response => {
        dispatch(setStatusAC(response.data))
    }
    )
}
export const updateStatus = (status: any) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then( response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(response.data))
        }

        }
    )
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2}
    ],

    profile: null,
    status: '',
}

export type profileType = {
    aboutMe: string
    contacts: {facebook: string, website: null | string, vk: string, twitter: null | string, instagram: null | string}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {small: string, large: string}
    userId: number
}

export type ProfilePageType = typeof initialState

const ProfileReducer = (state: ProfilePageType = initialState, action: ActionDispatchTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: action.newPostText, likesCount: 0}]
            }
        }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
};


export default ProfileReducer;