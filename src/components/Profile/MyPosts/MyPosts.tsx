import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, postPropsType, profilePagePropsType, statePropsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: postPropsType[]
    /*addPost: (postMessage: string) => void*/
    newPostText: string
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const addPost = () => {
        props.dispatch({type: "ADD-POST", postMessage: props.newPostText})

        /*if (newPostElement.current?.value) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
            /!*props.dispatch.bind(newPostElement.current?.value)*!/
            newPostElement.current.value = ''
        }*/

    }
    console.log('f')
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        /*props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", 'newText': e.currentTarget.value})


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