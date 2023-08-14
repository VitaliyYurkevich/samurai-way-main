import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    getStatus, getUserProfile,

    ProfilePageType,
    setUserProfileAC, updateStatus,

} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {UsersPageType} from "../../redux/users-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import exp from "constants";

type PathParamsType = {
    userId: number
}

type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId: number | null | undefined
    isAuth?: boolean
}

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => number
    updateStatus: (status: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType & MapStateToPropsForRedirectType


// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {

            userId = this.props.authorizedUserId as number
           // if(!userId) {
              //  this.props.history.push("/login")
            //}
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth["userId"],
        isAuth: state.auth["isAuth"]
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfile,
        getStatus: getStatus,
        updateStatus: updateStatus
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainerComponent)

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainerComponent)*/


/*
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {
        //addPost: addPostAC,
        // updateNewPostText: updateNewPostTextAC,
    getUserProfileTC: getUserProfileTC,

    }
)(WithUrlDataContainerComponent)*/
