import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPostAC, ProfilePageType, setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/users-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfileAC: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerComponent extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}  />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return{
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)


export default connect(mapStateToProps, {
        //addPost: addPostAC,
        // updateNewPostText: updateNewPostTextAC,
        setUserProfileAC
    }
)(WithUrlDataContainerComponent)