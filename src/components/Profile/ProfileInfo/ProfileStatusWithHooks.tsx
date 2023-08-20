import React, {useState} from "react";
import {log} from "util";

console.log('')
export const ProfileStatusWithHooks = (props: any) => {

    let stateWithSetState = useState(false)
    let editMode = stateWithSetState[0]
    let setEditMode = stateWithSetState[1]

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={() => {
                    }}>{props.status || '------'}</span>
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