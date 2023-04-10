import React from 'react';



const ProfileReducer = (state: any, action: any) => {
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