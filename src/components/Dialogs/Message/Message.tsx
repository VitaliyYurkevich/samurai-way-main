import classes from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
}


function Message(props: MessageType) {
    return (
        <div>
        <div className={classes.message}>{props.message}
        </div>
        </div>
    )
}

export default Message