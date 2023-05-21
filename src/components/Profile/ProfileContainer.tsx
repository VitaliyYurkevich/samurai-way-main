import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPostAC, ProfilePageType, setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/users-reducer";
import {withRouter} from "react-router-dom";


type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUsersProfile: (profile: any) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainerComponent extends React.Component<PropsType>{

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


let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return{
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


const ProfileContainer =  connect(mapStateToProps, {
    //addPost: addPostAC,
   // updateNewPostText: updateNewPostTextAC,
    setUsersProfile: setUserProfileAC
}
)(WithUrlDataContainerComponent)



export default ProfileContainer