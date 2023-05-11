import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";




function Profile() {

    return (
        <div>
            <ProfileInfo profilePage={store.getState().profilePage} />
            <MyPostsContainer />  {/*dispatch={store.dispatch.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     newPostText={store._state.profilePage.newPostText}
                //addPost={store.addPost.bind(store)}
                     posts={store._state.profilePage.posts}/>*/}

        </div>
    )
}

export default Profile