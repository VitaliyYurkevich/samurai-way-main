import React from 'react';
import {postPropsType} from "./state";
import {ActionDispatchTypes} from "./redux-store";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type addPostType = {
    type: typeof ADD_POST
}

export type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newPost:string
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const

}

export type ActionsTypes =
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addPostAC>

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'Its the first post', likesCount: 2},
        {id: 3, message: 'Like dont see you', likesCount: 2}
    ],
    newPostText: '',
}

export type ProfilePageType = typeof initialState

const ProfileReducer = (state:ProfilePageType=initialState, action: ActionDispatchTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {id: 4, message: state.newPostText, likesCount: 0}
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
    }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPost
            return stateCopy
    }
default: return state
}};

export default ProfileReducer;