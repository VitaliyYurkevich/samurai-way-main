import React, {ChangeEvent, MouseEventHandler, RefObject, useState} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";


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
    addPost: (values: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    /*let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()*/

    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}></Post>)

    const onAddPost = (values: any) => {

        props.addPost(values.newPostText)

        /*if (newPostElement.current?.value) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
            /!*props.dispatch.bind(newPostElement.current?.value)*!/
            newPostElement.current.value = ''
        }*/

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newPostText"}
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder={"post message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )


}

const AddNewPostFormRedux = reduxForm<any>({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts