import React from 'react';
import styles from "./users.module.css";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

console.log()
export type UsersPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<usersType>
}

const Users = (props: UsersPropsType) => {

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
                                <img src={u.photos != null ? u.photos : '@'} className={styles.userPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button>
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