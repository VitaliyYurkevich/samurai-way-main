import React from "react";
import classes from './Profile.module.css';

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
        <div>
            My posts
        </div>
        <div>
            New post
        </div>
        <div className={classes.posts}>
            <div className='item'>
                post 1
            </div>
            <div className={classes.item}>
                post 2
            </div>
        </div>
    </div>
   )
}

export default Profile