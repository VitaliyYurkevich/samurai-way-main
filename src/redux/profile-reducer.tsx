import React from 'react';
import {ActionsTypes, profilePagePropsType} from "./state";

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postText
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const

}

const ProfileReducer = (state: profilePagePropsType, action: ActionsTypes):profilePagePropsType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 4, message: action.postMessage, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }


    return state
};

export default ProfileReducer;