import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType, StorePropsType} from "../../redux/redux-store";

type MapStatePropsType = {

}

function DialogsContainer() {


    return (
        <div className={classes.dialogs}>
            <StoreContext.Consumer>{
                (store) => {
                    let state = store.getState()
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    let onNewMessageChange = (body: string) => {

                        store.dispatch(updateNewMessageBodyAC(body))
                    }

                    return (
                        <Dialogs dialogsPage={state.messagesPage}
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

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBodyAC: () => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessageAC: () => {
            dispatch(sendMessageAC())
        }
    }
}


const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer