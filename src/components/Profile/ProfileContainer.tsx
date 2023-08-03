import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    getStatusTC,
    getUserProfileTC,
    ProfilePageType,
    setUserProfileAC,
    updateNewPostTextAC,
    updateStatusTC
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
}

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType & MapStateToPropsForRedirectType



// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerComponent extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.getUserProfileTC(userId)
setTimeout(()=>{
    this.props.getStatusTC(userId)
}, 1000)

    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatusTC}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC
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
