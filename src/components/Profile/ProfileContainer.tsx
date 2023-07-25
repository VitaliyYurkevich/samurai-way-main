import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfileTC, ProfilePageType, setUserProfileAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/users-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import any = jasmine.any;

type PathParamsType = {
    userId: number
}

type MapStatePropsType = {
    profile: any
}

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType


// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerComponent extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
    }

    render() {

        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}  />
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainerComponent)


let mapStateToPropsForRedirect = (state: AppStateType):MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth['isAuth']
    }
}

AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return{
        profile: state.profilePage.profile,

    }
}




let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {
        //addPost: addPostAC,
        // updateNewPostText: updateNewPostTextAC,
    getUserProfileTC: getUserProfileTC,

    }
)(WithUrlDataContainerComponent)