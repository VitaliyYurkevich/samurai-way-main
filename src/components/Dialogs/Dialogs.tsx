import React, {ChangeEvent, FormEventHandler} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {v1} from "uuid";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

/*type DialogsPropsType = {
    newMessageBody: (body: string) => void
    sendMessage: ()=>void
    messagePage: DialogsPageType

}*/

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
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
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let addNewMessage = (values: any) => {
        alert(values.newMessageBody)
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
             <AddMessageFormRedux onSubmit={addNewMessage} />

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


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    placeholder='Enter your message'
                    name={'newMessageBody'}
                />
            </div>
            <div>
              <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
        form: 'dialogAddMessageForm'
}
)(AddMessageForm)


export default Dialogs