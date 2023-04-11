import React from 'react';
import {ActionsTypes, postPropsType, profilePagePropsType, statePropsType, StorePropsType} from "./state";



const ProfileReducer = (state: profilePagePropsType, action: ActionsTypes):profilePagePropsType => {
    if (action.type === 'ADD-POST') {
        let newPost = {id: 4, message: action.postMessage, likesCount: 0}
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    }


    return state
};

export default ProfileReducer;