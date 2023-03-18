import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, state} from "../../redux/state";


function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newPostText={state.profilePage.newPostText}
                addPost={addPost}
                posts={state.profilePage.posts}/>
        </div>
    )
}

export default Profile