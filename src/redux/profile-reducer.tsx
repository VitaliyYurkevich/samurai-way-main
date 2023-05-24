import React from 'react';
import {ActionDispatchTypes} from "./redux-store";
import post from "../components/Profile/MyPosts/Post/Post";
import {v1} from "uuid";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
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

const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 2},
        {id: v1(), message: 'Its the first post', likesCount: 2},
        {id: v1(), message: 'Like dont see you', likesCount: 2}
    ],
    newPostText: 'asdasda',
    profile: [
        {aboutMe: '',
            contacts: {facebook: '', website: '', vk: '', twitter: '', instagram: ''},
            fullName: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: {small: '', large: ''},
            userId: 1}
    ]
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
                posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 0}]
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