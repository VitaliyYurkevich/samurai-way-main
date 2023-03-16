import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

type DialogsDataPropsType = {
    id: number
    name: string
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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messegesData = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'BlaBla'},
        {id: 3, name: 'Hello'},
        {id: 4, name: 'WTF'},
        {id: 5, name: 'Whats up'},
        {id: 6, name: 'Valera'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((user)=>{
                    return(
                        <DialogsItem name={user.name} id={user.id}/>
                    )
                })}
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