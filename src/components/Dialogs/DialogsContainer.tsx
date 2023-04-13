import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsPagePropsType,
    profilePagePropsType,
    StorePropsType,
} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

type DialogsPropsTyp = {
    store: StorePropsType
}

function DialogsContainer(props: DialogsPropsTyp) {


    return (
        <div className={classes.dialogs}>
            <StoreContext.Consumer>{
                (store)=>{
                    let state = store.getState()
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onNewMessageChange = (body: string) => {

                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    return(
                        <Dialogs dialogsPage={state.dialogsPage}
                                 sendMessage={onSendMessageClick}
                                 updateNewMessageBody={onNewMessageChange}
                        />
                    )
                }
                }
            </StoreContext.Consumer>

        </div>


    )
}

export default DialogsContainer