import classes from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}

console.log('status')
function Message(props: MessageType) {
    return (
        <div>
        <div className={classes.message}>
         <textarea>{props.message}</textarea>
        </div>
        <div>
            <button>Отправить сообщение</button>
        </div>
        </div>
    )
}


export default Message