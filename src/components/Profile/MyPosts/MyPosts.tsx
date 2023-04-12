import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    postPropsType,
} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: postPropsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
    /*dispatch: (action: ActionsTypes) => void*/
}



function MyPosts(props: MyPostsPropsType) {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const addPost = () => {
        props.addPost()

        /*if (newPostElement.current?.value) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
            /!*props.dispatch.bind(newPostElement.current?.value)*!/
            newPostElement.current.value = ''
        }*/

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
let text = e.currentTarget.value
        /*updateNewPostTextAC(text)*/
        props.updateNewPostText(text)



    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea
                            ref={newPostElement}
                            value={props.newPostText}
                            onChange={onPostChange}/>
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