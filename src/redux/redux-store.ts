import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer, {addPostType, setUserProfileType, updateNewPostTextType} from "./profile-reducer";
import DialogsReducer, {addTextType, updateNewMessageTextType} from "./dialogs-reducer";
import UsersReducer, {
    followType,
    setCurrentPageType, setIsFetchingType,
    setTotalUsersCountType,
    setUsersType, toggleFollowingProgressType,
    unfollowType
} from "./users-reducer";
import authReducer, {setUserDataType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {log} from "util";

/*type RootReducerType = typeof RootReducer
типизация заглушка???
export type AppType = ReturnType<RootReducerType>*/

export type ActionDispatchTypes =
    addTextType
    | addPostType
    | updateNewMessageTextType
    | updateNewPostTextType
    | followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | setIsFetchingType
    | setUserProfileType
| setUserDataType
|toggleFollowingProgressType


let RootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: authReducer

})

/*
export let store = legacy_createStore(RootReducer)
export type StoreType = typeof store
export type ReduxStateType = ReturnType<typeof store.getState>*/

/*
export type RootState = ReturnType<typeof RootReducer>
export let store = legacy_createStore(RootReducer)
*/
export let store = createStore(RootReducer, applyMiddleware(thunkMiddleware))

/*export type StorePropsType =  typeof store*/

export type AppStateType = ReturnType<typeof RootReducer>
