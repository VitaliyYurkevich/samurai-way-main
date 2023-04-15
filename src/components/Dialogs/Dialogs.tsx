import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: ()=>void
    messagePage: DialogsPageType

}

function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.messagePage.dialogData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagePage.messageData.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })
    let newMessageBody = props.messagePage.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.newMessageBody(body)
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