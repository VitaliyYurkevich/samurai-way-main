import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC, setIsFetchingType,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC, UsersPageType,
    usersType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "../../assets/preloader.svg"
import Preloader from "../common/Preloader";

export type usersAPIPropsType = {
    usersPage: UsersPageType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
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
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.usersPage.totalUsersCount}
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
        isFetching: state.usersPage.isFetching
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
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer