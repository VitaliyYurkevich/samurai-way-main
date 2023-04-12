import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsPagePropsType,
    profilePagePropsType,
    StorePropsType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsTyp = {
    store: StorePropsType
}

function DialogsContainer(props: DialogsPropsTyp) {

    let state = props.store.getState()
    let onSendMessageClick = () => {
     props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {

        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={classes.dialogs}>
           <Dialogs dialogsPage={state.dialogsPage} sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} />
        </div>


    )
}

export default DialogsContainer