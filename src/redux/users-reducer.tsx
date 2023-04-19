import React from 'react';
import {v1} from "uuid";
import {ActionDispatchTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export type followType = {
    type: typeof FOLLOW
    userId: string
}
export type unfollowType = {
    type: typeof UNFOLLOW
    userId: string
}
export type setUsersType = {
    type: typeof SET_USERS
    users: Array<usersType>
}

export type usersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<usersType>) => ({type: SET_USERS, users})


const initialState = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: 'Oleg',
            status: 'i am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Oleg',
            status: 'i am boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Oleg',
            status: 'i am boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ]
}

export type UsersPageType = typeof initialState

const UsersReducer = (state: UsersPageType = initialState, action: ActionDispatchTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }


        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users] }

        }
        default:
            return state
    }
    };



        export default UsersReducer;