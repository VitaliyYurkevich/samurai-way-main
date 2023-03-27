import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {store} from "../../redux/state";

console.log('status')
function Profile() {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts  dispatch={store.dispatch.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     newPostText={store._state.profilePage.newPostText}
                /*addPost={store.addPost.bind(store)}*/
                     posts={store._state.profilePage.posts}/>

        </div>
    )
}

export default Profile