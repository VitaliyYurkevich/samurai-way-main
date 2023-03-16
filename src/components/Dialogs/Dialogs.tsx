import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogs, dialogsPropsType, messages, messagesPropsType} from "../../index";



export type DialogsType = {
    dialogs: dialogsPropsType[]
    messages: messagesPropsType[]
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs