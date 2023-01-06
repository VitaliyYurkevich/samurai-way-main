import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
   return(
    <div className={classes.content}>
        <div>
            <img
                src='https://img1.goodfon.ru/wallpaper/nbig/6/f2/priroda-kanada-gory-ozero-domik-zima-sneg.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
   )
}

export default Profile