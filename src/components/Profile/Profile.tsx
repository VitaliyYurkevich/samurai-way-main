import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {store} from "../../redux/state";



function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={store.updateNewPostText}
                newPostText={store._state.profilePage.newPostText}
                addPost={store.addPost}
                posts={store._state.profilePage.posts}/>

        </div>
    )
}

export default Profile