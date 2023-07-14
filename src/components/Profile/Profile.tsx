import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";
import {profileType} from "../../redux/profile-reducer";
console.log()

type ProfilePropsType = {
    profile: profileType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>

               <ProfileInfo profile={props.profile}  />
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