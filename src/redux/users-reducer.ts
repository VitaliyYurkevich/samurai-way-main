import {v1} from "uuid";
import {ActionDispatchTypes} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
export const TOGGLE_IS_FETCHING = 'SET_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type followType = {
    type: typeof FOLLOW
    userId: number
}
export type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export type setUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type setTotalUsersCountType = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalCount: number
}
export type setIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

type ActionsType = followType | unfollowType | setUsersType | setCurrentPageType |
    setTotalUsersCountType | setIsFetchingType | toggleFollowingProgressType

/*export type usersType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
}*/

export type followingProgressType = {
    userId: number
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount: totalUsersCount
})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)


/*type usersType = {
    users: [
        {
            id: string
            photos: string
            followed: boolean
            name: string
            status: string
            location: {
                city: string
                country: string
            }
        }
    ]
}*/
export type UserType = {
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string }
    name: string
    followed: boolean
    status: string
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type UsersPageType = typeof initialState
//parseInt(action.userId))
const UsersReducer = (state: UsersPageType = initialState, action: ActionDispatchTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
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
        case UNFOLLOW: {
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
        case SET_USERS: {
            return {...state, users: action.users}

        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
};


//export type ThunkDispatchType = typeof

export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        toggleIsFetchingAC(true)
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setUsersTotalCountAC(data.totalCount))
            })
    }
}

export const followThunkCreator = (userId: number): any => {
    return (dispatch: Dispatch) => {
        toggleFollowingProgressAC(true, userId)
        usersAPI.follow(userId)
            // @ts-ignore
            .then((response: any) => {
                if( response.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })

    }
}

export const unfollowThunkCreator = (userId: number): any => (dispatch: Dispatch) => {
    toggleFollowingProgressAC(true, userId)
    usersAPI.unfollow(userId)
        .then(response => {
            if( response.data.resultCode === 1) {
                dispatch(unFollowAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })

}



export default UsersReducer;