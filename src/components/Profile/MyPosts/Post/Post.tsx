import React from "react";
import classes from './Post.module.css';



type MessageType = {
    message: string
    likesCount: number
}


function Post(props: MessageType) {



    return (
        <div>
            <div className={classes.item}>
                <img src='https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg'/>
                {props.message}
            </div>
            <div>
                <span>Like</span> {props.likesCount}

            </div>
        </div>


    )
}

export default Post