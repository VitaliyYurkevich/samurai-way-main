import React from 'react';
import {ActionDispatchTypes} from "./redux-store";
import post from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export type addPostType = {
    type: typeof ADD_POST
}

export type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newPost: string
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostTextAC = (newPost: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPost: newPost
    } as const

}
export const setUserProfileAC = (profile: string) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then( response => {
            dispatch(setUserProfileAC(response.data))
        }
    )
}

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2}
    ],
    newPostText: '',
    profile: null
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
                newPostText: '',
                posts: [...state.posts, {id: 1, message: state.newPostText, likesCount: 0}]
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
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