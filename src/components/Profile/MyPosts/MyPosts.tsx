import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {
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
                        <Post message='Hi, how are you?' likesCount={2}/>
                        <Post message='Its my first post' likesCount={0}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts