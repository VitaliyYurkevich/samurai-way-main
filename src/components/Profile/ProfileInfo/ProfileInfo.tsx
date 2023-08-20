import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfilePageType, profileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
console.log('')

type ProfileInfoPropsType = {
    profile: profileType
    status: any
    updateStatus: (status: any) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
if(!props.profile){
    return <Preloader />
}

    return (

        <div className={classes.content}>
            <div>
                <img
                  src='https://img1.goodfon.ru/wallpaper/nbig/6/f2/priroda-kanada-gory-ozero-domik-zima-sneg.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo
