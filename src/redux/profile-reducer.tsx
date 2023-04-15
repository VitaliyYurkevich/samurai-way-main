import React from 'react';
import {postPropsType} from "./state";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type addPostType = {
    type: typeof ADD_POST
}

export type updateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newPost:string
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postMessage: postText
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

export type profilePagePropsType = {
    posts: postPropsType[]
    newPostText: string
}

export type postType = {
    id: number
    message: string
    likesCount: number
}

const postData: Array<postType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'Its the first post', likesCount: 2},
    {id: 3, message: 'Like dont see you', likesCount: 2}
]

const initialState = {
    postData: postData,
    newPostText: 'IT-TI',
}

export type ProfilePageType = typeof initialState

const ProfileReducer = (state:ProfilePageType=initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 4, message: action.postMessage, likesCount: 0}
            state.postData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        default:
            return state
    }
return state
};

export default ProfileReducer;