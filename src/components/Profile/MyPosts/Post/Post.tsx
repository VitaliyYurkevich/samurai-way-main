import React from "react";
import classes from './Post.module.css';

function Post() {
   return(
    <div>
            <div className={classes.item}>
                <img src='https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg'/>
                post 1
                </div>
                <div>
                <span className={classes.cv}> like</span>
                    </div>
            </div>


   )
}

export default Post