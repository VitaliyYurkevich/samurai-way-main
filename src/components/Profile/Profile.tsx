import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {post} from "../../index";


function Profile() {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={post}/>
        </div>
    )
}

export default Profile