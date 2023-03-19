import {rerenderEntireTree} from "../render";

export type dialogsPropsType = {
    id: number
    name: string
}

export type messagesPropsType = {
    id: number
    message: string
}

export type postPropsType = {
    id: number
    message: string
    likesCount: number
}

export type profilePagePropsType = {
    posts: postPropsType[]
    newPostText: string
}

export type messagePagePropsType = {
    dialogs: dialogsPropsType[]
    messages: messagesPropsType[]
}

export type statePropsType = {
    profilePage: profilePagePropsType
    messagesPage: messagePagePropsType
}


export let state: statePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'Its the first post', likesCount: 2},
            {id: 3, message: 'Like dont see you', likesCount: 2}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'BlaBla'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'WTF'},
            {id: 5, message: 'Whats up'},
            {id: 6, message: 'Valera'},
        ]
    },

}



export const addPost= (postMessage: string) => {
    let newPost = {id: 4, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)

}




