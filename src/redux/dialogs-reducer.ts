import React from 'react';
import {ActionDispatchTypes} from "./redux-store";

export const SEND_MESSAGE = "ADD-TEXT"
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"


export type  addTextType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}


export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}


const initialState = {
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
    ],
    newMessageBody: '2'
}

export type DialogsPageType = typeof initialState


const DialogsReducer = (state: DialogsPageType = initialState, action: ActionDispatchTypes):DialogsPageType => {

     /*= {
        ...state,
        /!*messages: [...state.messages]*!/
    }*/

    switch (action.type) {


        case SEND_MESSAGE:
            let body = action.newMessageBody
            return{
                ...state,
                messages: [...state.messages, {id: 1, message: body}]
        }
        default:
            return state
    }

};

export default DialogsReducer;