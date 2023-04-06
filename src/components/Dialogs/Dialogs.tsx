import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {statePropsType} from "../../redux/state";




function Dialogs(props: statePropsType) {
    console.log('jh')
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map((m) => {
        return(

            <Message message={m.message}/>

        )
    })

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