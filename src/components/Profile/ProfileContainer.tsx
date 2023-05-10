import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPostAC, ProfilePageType, setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/users-reducer";

export type ProfileContainerPropsType = {
    setUsersProfile: (profile: any) => void
}



class ProfileContainerComponent extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return(
            <div>
                <Profile  />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType) => {
    return{
        profilePage: state.profilePage,
        profile: state.profilePage.profile

    }
}




const ProfileContainer =  connect(mapStateToProps, {
    //addPost: addPostAC,
   // updateNewPostText: updateNewPostTextAC,
    setUsersProfile: setUserProfileAC
}
)(ProfileContainerComponent)

export default ProfileContainer