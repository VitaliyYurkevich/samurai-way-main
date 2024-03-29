import React, {ChangeEvent, useEffect, useState} from "react";
import {log} from "util";


export const ProfileStatusWithHooks = (props: any) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        debugger
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e)
    }

return (
    <div>
        {
            !editMode &&
            <div>
                    <span onDoubleClick={activateMode}>
                        {props.status || '------'}</span>
            </div>
        }
        {
            editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={props.status}/>
            </div>
        }
    </div>
)
}