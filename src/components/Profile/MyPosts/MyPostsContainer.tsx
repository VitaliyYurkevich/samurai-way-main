import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



/*export type MyPostsPropsType = mapDispatchToPropsType & mapStateToPropsType*/


let mapStateToProps = (state: AppStateType) => {
    return{
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return{
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

 type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

/*
function MyPostsContainer() {

    return (
        <div className={classes.postsBlock}>
            <StoreContext.Consumer>{
                (store:StorePropsType) => {
                    let state = store.getState()
                    const addPost = () => {

                        store.dispatch(addPostAC(store.getState().profilePage.newPostText))

                        /!*if (newPostElement.current?.value) {
                            props.dispatch({type: "ADD-POST", postMessage: props.newPostText})
                            /!*props.dispatch.bind(newPostElement.current?.value)*!/
                            newPostElement.current.value = ''
                        }*!/

                    }
                    const onPostChange = (text: string) => {

                        /!*props.updateNewPostText(e.currentTarget.value)*!/
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
*/



