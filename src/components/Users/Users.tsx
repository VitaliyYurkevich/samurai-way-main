import React from 'react';
import styles from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

console.log()

export type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

const Users = (props: UsersPropsType) => {
    let userPhoto = 'https://img.freepik.com/premium-vector/male-avatar-icon-unknown-or-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-on-white-background-vector-illustration_735449-120.jpg'
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            // @ts-ignore
                            <span className={props.currentPage === p && styles.selectedPage}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}
                            >{p}</span>
                        )

                    })}
                </div>
                {/* <button onClick={this.getUsers}>Get users</button>*/}
                <div></div>
                {
                    props.users.map(u => {


                            return (
                                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos !== null ? userPhoto : '@'} className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === (u.id))}
                                          onClick={() => { props.follow(u.id)} }>Follow</button>

                                : <button disabled={props.followingInProgress.some(id => id === (u.id))}
                                          onClick={() => { props.unFollow(u.id)} }>UnFollow</button>
                            }
                        </div>
                    </span>
                                    <span>
                        <span>
                           <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}


export default Users;