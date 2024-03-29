import React from 'react';
import { sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStateType) => {

    return {
        dialogsPage: state.dialogsPage,

        isAuth:state.auth['isAuth']
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))

        }
    }
}

/*export type DialogsPropsType = mapStateToPropsType & MapDispatchPropsType*/

 type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer


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