import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";
import {profileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: profileType
    status: any
    updateStatus: (status: any) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>

               <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />  {/*dispatch={store.dispatch.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     newPostText={store._state.profilePage.newPostText}
                //addPost={store.addPost.bind(store)}
                     posts={store._state.profilePage.posts}/>*/}

        </div>
    )
}
//store.getState().profilePage.profile
export default Profile