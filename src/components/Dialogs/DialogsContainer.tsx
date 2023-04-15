import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


/*function DialogsContainer() {


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
}*/
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer