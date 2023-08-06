import React from 'react';
import {ActionDispatchTypes} from "./redux-store";
import {v1} from "uuid";

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
                messages: [...state.messages, {id: v1(), message: body}]
        }
        default:
            return state
    }

};

export default DialogsReducer;