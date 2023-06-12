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
    follow: (userId: number) => void
    unFollow: (userId: number) => void
   // setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
  //  setTotalUsersCount: (totalCount: number) => void
  //  toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
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
this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
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
        followingInProgress: state.usersPage.followingInProgress,
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

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const UsersContainer = connect(mapStateToProps, {
        follow: followAC,
        unFollow: unFollowAC,
        //setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
       // setTotalUsersCount: setUsersTotalCountAC,
       // toggleIsFetching: toggleIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
       getUsers: getUserThunkCreator
    }
)(UsersAPIComponent)

export default UsersContainer