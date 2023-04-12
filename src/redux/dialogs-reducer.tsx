import React from 'react';
import {ActionsTypes, dialogsPagePropsType, messagesPropsType, profilePagePropsType, statePropsType} from "./state";

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}



const DialogsReducer = (state: dialogsPagePropsType, action: ActionsTypes):dialogsPagePropsType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 7, message: body})
            break;
    }
    return state
};

export default DialogsReducer;