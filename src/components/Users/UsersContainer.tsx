import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, toggleIsFetchingAC, setIsFetchingType,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgressAC,
    unFollowAC, UsersPageType, getUserThunkCreator, followThunkCreator, unfollowThunkCreator
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/preloader.svg"
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export type mapStateToPropsType = {
    usersPage: UsersPageType
   // setUsers: (users: Array<usersType>) => void
  //  setTotalUsersCount: (totalCount: number) => void
  //  toggleIsFetching: (isFetching: boolean) => void

}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type usersAPIPropsType = mapStateToPropsType & MapDispatchPropsType


class UsersAPIComponent extends React.Component<usersAPIPropsType> {

    /*getUsers = () => {

        if (this.state.usersPage.users.length === 1) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })


        }
    }*/

    componentDidMount() {
this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }


    render() {


        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users
                       followingInProgress={this.props.usersPage.followingInProgress}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       totalUsersCount={this.props.usersPage.totalUsersCount}
                       pageSize={this.props.usersPage.pageSize}
                       currentPage={this.props.usersPage.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       users={this.props.usersPage.users}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        //getUserThunkCreator:
    }

}

/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgressAC(isFetching, userId))
        },

    }
}*/


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow: followThunkCreator,
        unFollow: unfollowThunkCreator,
        //setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        // setTotalUsersCount: setUsersTotalCountAC,
        // toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsers: getUserThunkCreator,

    } )
) (UsersAPIComponent)

/*

let withRedirect = withAuthRedirect(UsersAPIComponent)

const UsersContainer = connect(mapStateToProps, {
        follow: followThunkCreator,
        unFollow: unfollowThunkCreator,
        //setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
       // setTotalUsersCount: setUsersTotalCountAC,
       // toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
       getUsers: getUserThunkCreator,

    }
)(withRedirect)

*/

