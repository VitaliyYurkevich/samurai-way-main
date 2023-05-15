import {combineReducers, createStore} from "redux";
import ProfileReducer, {addPostType, setUserProfileType, updateNewPostTextType} from "./profile-reducer";
import DialogsReducer, {addTextType, updateNewMessageTextType} from "./dialogs-reducer";
import UsersReducer, {
    followType,
    setCurrentPageType, setIsFetchingType,
    setTotalUsersCountType,
    setUsersType,
    unfollowType
} from "./users-reducer";

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


let RootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,

})

/*
export let store = legacy_createStore(RootReducer)
export type StoreType = typeof store
export type ReduxStateType = ReturnType<typeof store.getState>*/

/*
export type RootState = ReturnType<typeof RootReducer>
export let store = legacy_createStore(RootReducer)
*/
export let store = createStore(RootReducer)

/*export type StorePropsType =  typeof store*/

export type AppStateType = ReturnType<typeof RootReducer>
