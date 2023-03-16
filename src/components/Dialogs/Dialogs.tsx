import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogItem";



type MessageType = {
    message: string
}



function Message(props: MessageType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'BlaBla'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'WTF'},
        {id: 5, message: 'Whats up'},
        {id: 6, message: 'Valera'},
    ]

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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