import React, {useState} from "react";
import {log} from "util";


export const ProfileStatusWithHooks = (props: any) => {

    let [editMode, setEditMode] = useState(false)
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
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
                <input onChange={() => {
                }} onBlur={() => {
                }}
                       value={''}/>
            </div>
        }
    </div>
)
}