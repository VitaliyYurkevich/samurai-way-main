import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfilePageType, profileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader";

type ProfileInfoPropsType = {
    profile: profileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
if(!props.profile){
    return <Preloader />
}
debugger
    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://img1.goodfon.ru/wallpaper/nbig/6/f2/priroda-kanada-gory-ozero-domik-zima-sneg.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
