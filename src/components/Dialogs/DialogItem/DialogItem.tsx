import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsDataPropsType = {
    id: number
    name: string
}
type DialogsType = {
    name: string
    id: number
}

function DialogsItem(props: DialogsType) {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem