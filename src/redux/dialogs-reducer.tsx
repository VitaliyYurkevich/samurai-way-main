import React from 'react';
import {ActionsTypes, messagePagePropsType, messagesPropsType, profilePagePropsType, statePropsType} from "./state";

const DialogsReducer = (state: messagePagePropsType, action: ActionsTypes):messagePagePropsType => {
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