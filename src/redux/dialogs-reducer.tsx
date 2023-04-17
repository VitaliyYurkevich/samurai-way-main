import React from 'react';
import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {ActionDispatchTypes} from "./redux-store";
import {v1} from "uuid";

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
    body: string
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

const initialState = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'BlaBla'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'WTF'},
        {id: v1(), message: 'Whats up'},
        {id: v1(), message: 'Valera'},
    ],
    newMessageBody: 'hello'
}

export type DialogsPageType = typeof initialState


const DialogsReducer = (state: DialogsPageType = initialState, action: ActionDispatchTypes):DialogsPageType => {

     /*= {
        ...state,
        /!*messages: [...state.messages]*!/
    }*/

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return{
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: v1(), message: body}]
        }
        default:
            return state
    }

};

export default DialogsReducer;