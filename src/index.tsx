import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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


export let post = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'Its the first post', likesCount: 2},
    {id: 3, message: 'Like dont see you', likesCount: 2}
]

/*
export let AddPost = (message: string) => {
    let posts = {id: 4, message: message, likesCount: 0}
    let NewPost = [...post, posts]
    setPost(NewPost)
}

*/

export let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

export let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'BlaBla'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'WTF'},
    {id: 5, message: 'Whats up'},
    {id: 6, message: 'Valera'},
]


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

