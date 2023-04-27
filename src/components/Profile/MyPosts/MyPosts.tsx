import React, {ChangeEvent, MouseEventHandler, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";



/*
type MyPostsPropsType = {

    posts: postPropsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
    /!*dispatch: (action: ActionsTypes) => void*!/
}
*/

export type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    /*let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()*/

    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const addPost = () => {

        props.addPost()

        /*if (newPostElement.current?.value) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
            /!*props.dispatch.bind(newPostElement.current?.value)*!/
            newPostElement.current.value = ''
        }*/

    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea
                            /*ref={newPostElement}*/
                            value={props.profilePage.newPostText}
                            onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={() => {
                            addPost()
                        }}>Add post
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