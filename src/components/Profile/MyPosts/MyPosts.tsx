import React, {useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {postPropsType, profilePagePropsType, statePropsType} from "../../../redux/state";



type MyPostsPropsType = {
    post: postPropsType[]
}

function MyPosts(props: profilePagePropsType) {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const addPost = () => {alert('aasda')}

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post
                        </button>
                    </div>
                    <div className={classes.posts}>
                        {postElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts