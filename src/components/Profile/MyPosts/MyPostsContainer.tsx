import React, {ChangeEvent, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import {StorePropsType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


type MyPostsPropsType = {
    store: StorePropsType
}

console.log('s')
function MyPostsContainer(props: MyPostsPropsType) {

    return (
        <div className={classes.postsBlock}>
            <StoreContext.Consumer>{
                (store) => {
                    let state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC(state.profilePage.newPostText))

                        /*if (newPostElement.current?.value) {
                            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
                            /!*props.dispatch.bind(newPostElement.current?.value)*!/
                            newPostElement.current.value = ''
                        }*/

                    }
                    const onPostChange = (text: string) => {

                        /*props.updateNewPostText(e.currentTarget.value)*/
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}/>
                    )
                }

            }

            </StoreContext.Consumer>

        </div>
    )
}


export default MyPostsContainer