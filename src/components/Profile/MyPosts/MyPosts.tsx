import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {message} from "antd";


function MyPosts() {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 2 },
        {id: 2, message: 'Its the first post', likesCount: 2 },
        {id: 3, message: 'Like dont see you', likesCount: 2 }
    ]


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>

                    <div className={classes.posts}>
                        {postData.map((post)=>{
                            return(
                               <div>{ post.message} like {post.likesCount }</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts