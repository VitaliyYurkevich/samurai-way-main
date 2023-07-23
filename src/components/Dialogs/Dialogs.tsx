import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {v1} from "uuid";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

/*type DialogsPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: ()=>void
    messagePage: DialogsPageType

}*/

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: ()=>void
    updateNewMessageBody: (newMessageBody: string) => void
    isAuth: boolean
}



function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={v1()}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })
    console.log()
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let body = e.currentTarget.value
        //props.updateNewMessageBody(body)
        props.updateNewMessageBody(e.currentTarget.value)
    }

    if(!props.isAuth) return <Redirect to={'login'}/>

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
                                   value={props.dialogsPage.newMessageBody}
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