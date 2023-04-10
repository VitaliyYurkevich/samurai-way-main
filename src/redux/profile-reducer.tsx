import React from 'react';
import {ActionsTypes, profilePagePropsType, statePropsType, StorePropsType} from "./state";



const ProfileReducer = (state: statePropsType, action: ActionsTypes):statePropsType => {
    if (action.type === 'ADD-POST') {
        let newPost = {id: 4, message: action.postMessage, likesCount: 0}
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.profilePage.newPostText = action.newText
    }


    return state
};

export default ProfileReducer;