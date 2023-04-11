import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    messagePagePropsType,
    profilePagePropsType,
    StorePropsType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: StorePropsType
    profilePage: profilePagePropsType
    messagesPage: messagePagePropsType
}

function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.store._state.messagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.store._state.messagesPage.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })
    let newMessageBody = props.store._state.messagesPage.newMessageBody
    let onSendMessageClick = () => {
props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
           let body = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea placeholder='Enter your message'
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}
                    >
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Dialogs