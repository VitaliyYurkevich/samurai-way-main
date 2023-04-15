import React from 'react';
import {addPostAC, updateNewPostTextAC} from "./profile-reducer";

const SEND_MESSAGE = "ADD-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

export type ActionsTypes =
    ReturnType<typeof updateNewMessageBodyAC> |
    ReturnType<typeof sendMessageAC>

export type  addTextType = {
    type: typeof SEND_MESSAGE
}
export type updateNewMessageTextType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    newText: string
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export type dialogsType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}

const dialogData: Array<dialogsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

const messageData: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'BlaBla'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'WTF'},
    {id: 5, message: 'Whats up'},
    {id: 6, message: 'Valera'},
]


const initialState = {
    dialogData: dialogData,
    messageData: messageData,
    newMessageBody: 'hello'
}

export type DialogsPageType = typeof initialState


const DialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messageData.push({id: 7, message: body})
            break;
    }
    return state
};

export default DialogsReducer;