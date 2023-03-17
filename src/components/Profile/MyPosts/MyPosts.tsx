import React, {RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {postPropsType, profilePagePropsType, statePropsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: postPropsType[]
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const addPost = () => {
        let text = newPostElement.current?.value
        if(text){
            props.addPost(text)
        }

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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