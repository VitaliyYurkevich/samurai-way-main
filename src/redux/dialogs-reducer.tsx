import React from 'react';

const DialogsReducer = (state: any, action: any) => {
   if(action.type === 'UPDATE-NEW-MESSAGE-BODY') {
    state.messagesPage.newMessageBody = action.body

} else if (action.type === 'SEND-MESSAGE') {
    let body = state.messagesPage.newMessageBody
    state.messagesPage.newMessageBody = ''
    state.messagesPage.messages.push({id: 7, message: body})
}
    return state
};

export default DialogsReducer;