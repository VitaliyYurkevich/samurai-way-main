import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {message} from "antd";
import {postPropsType} from "../../../index";


type MyPostsPropsType = {
    post: postPropsType[]
}

function MyPosts(props: MyPostsPropsType) {



    let postElements = props.post.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

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
                        {postElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts