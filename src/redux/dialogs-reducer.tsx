import React from 'react';
import {ActionsTypes, messagePagePropsType, messagesPropsType, profilePagePropsType, statePropsType} from "./state";

const DialogsReducer = (state: messagePagePropsType, action: ActionsTypes):messagePagePropsType => {
   if(action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    state.newMessageBody = action.body

} else if (action.type === 'SEND-MESSAGE') {
    let body = state.newMessageBody
    state.newMessageBody = ''
    state.messages.push({id: 7, message: body})
}
    return state
};

export default DialogsReducer;