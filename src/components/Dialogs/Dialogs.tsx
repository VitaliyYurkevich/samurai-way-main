import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsPropsType,
    dialogsPagePropsType, messagesPropsType,
    profilePagePropsType,
    StorePropsType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    /*store: StorePropsType*/
    dialogsPage: {
        dialogs: dialogsPropsType[]
        messages: messagesPropsType[]
        newMessageBody: string
    }
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void

}

function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })
    let newMessageBody = props.dialogsPage.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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