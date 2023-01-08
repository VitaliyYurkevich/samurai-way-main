import React from "react";
import classes from "./ProfileInfo.module.css"


function ProfileInfo() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://img1.goodfon.ru/wallpaper/nbig/6/f2/priroda-kanada-gory-ozero-domik-zima-sneg.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
