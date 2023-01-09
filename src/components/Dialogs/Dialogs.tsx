import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}
let a
type MessageType = {
    message: string
}


function DialogsItem(props:DialogsType) {
    let path = '/dialogs/' + props.id
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props:MessageType){
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name={'Dimych'} id={1}/>
                <DialogsItem name={'Andrey'} id={2}/>
                <DialogsItem name={'Sveta'} id={3}/>
                <DialogsItem name={'Sasha'} id={4}/>
                <DialogsItem name={'Viktor'} id={5}/>
                <DialogsItem name={'Valera'} id={6}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Blablabla'}/>
                <Message message={'Blablabla'}/>
                <Message message={'Blablabla'}/>
                <Message message={'Blablabla'}/>
            </div>
        </div>

    )
}

export default Dialogs