import React, {ChangeEvent, FormEventHandler} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {v1} from "uuid";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

/*type DialogsPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: ()=>void
    messagePage: DialogsPageType

}*/

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (values: string) => void
    isAuth: boolean
}


function Dialogs(props: DialogsPropsType) {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={v1()}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => {
        return (
            <Message message={m.message}/>
        )
    })
   // let onSendMessageClick = () => {
    //    props.sendMessage()
  //  }
    let addNewMessage = (values: any) => {
        props.sendMessage(values)
    }
    //if(!props.isAuth) return <Redirect to={'login'}/>


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>

             <AddMessageFormRedux onSubmit ={addNewMessage} />

            </div>

        </div>


    )
}

export type AddMessagePropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (newMessageBody: string) => void
    handleSubmit: () => void
}



export default Dialogs