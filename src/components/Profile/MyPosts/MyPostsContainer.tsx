import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import {StorePropsType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    store: StorePropsType
}



function MyPostsContainer(props: MyPostsPropsType) {

    const addPost = () => {
        props.store.dispatch(addPostAC(props.store._state.profilePage.newPostText))

        /*if (newPostElement.current?.value) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
            /!*props.dispatch.bind(newPostElement.current?.value)*!/
            newPostElement.current.value = ''
        }*/

    }

    const onPostChange = (text: string) => {

        /*props.updateNewPostText(e.currentTarget.value)*/
        props.store.dispatch(updateNewPostTextAC(text))


    }

    return (
        <div className={classes.postsBlock}>
           <MyPosts posts={props.store._state.profilePage.posts}
                    newPostText={props.store._state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
                    addPost={addPost}/>
        </div>
    )
}


export default MyPostsContainer