import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, toggleIsFetchingAC, setIsFetchingType,
    setUsersAC,
    setUsersTotalCountAC, toggleFollowingProgressAC,
    unFollowAC, UsersPageType,
    usersType, getUserThunkCreator
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/preloader.svg"
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";

export type usersAPIPropsType = {
    usersPage: UsersPageType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}


class UsersAPIComponent extends React.Component<usersAPIPropsType> {

    /*getUsers = () => {

        if (this.state.usersPage.users.length === 1) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })


        }
    }*/

    componentDidMount() {

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users followingInProgress={this.props.usersPage.followingInProgress}
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
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

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
        setIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgressAC(isFetching, userId))
        },

    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const UsersContainer = connect(mapStateToProps, {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setUsersTotalCountAC,
        setIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUserThunkCreator
    }
)(UsersAPIComponent)

export default UsersContainer