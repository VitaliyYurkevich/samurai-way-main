import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer";
import {v1} from "uuid";

/*type DialogsPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: ()=>void
    messagePage: DialogsPageType

}*/

function Dialogs(props: DialogsPropsType) {

    let newMessageBody = props.messagePage.newMessageBody
    let dialogsElements = props.messagePage.dialogs.map(d => <DialogsItem name={d.name} id={v1()}/>)
    let messagesElements = props.messagePage.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let body = e.currentTarget.value
        //props.updateNewMessageBody(body)

        newMessageBody = e.currentTarget.value
        props.updateNewMessageBody(newMessageBody)
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