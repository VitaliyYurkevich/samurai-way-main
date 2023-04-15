import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {store} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />  {/*dispatch={store.dispatch.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     newPostText={store._state.profilePage.newPostText}
                //addPost={store.addPost.bind(store)}
                     posts={store._state.profilePage.posts}/>*/}

        </div>
    )
}

export default Profile