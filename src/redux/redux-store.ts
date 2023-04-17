import {combineReducers, legacy_createStore} from "redux";
import ProfileReducer, {addPostType, updateNewPostTextType} from "./profile-reducer";
import DialogsReducer, {addTextType, updateNewMessageTextType} from "./dialogs-reducer";

/*type RootReducerType = typeof RootReducer
типизация заглушка???
export type AppType = ReturnType<RootReducerType>*/

export type ActionDispatchTypes = addTextType | addPostType | updateNewMessageTextType | updateNewPostTextType


let RootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,


})

/*
export let store = legacy_createStore(RootReducer)
export type StoreType = typeof store
export type ReduxStateType = ReturnType<typeof store.getState>*/

/*
export type RootState = ReturnType<typeof RootReducer>
export let store = legacy_createStore(RootReducer)
*/
export let store = legacy_createStore(RootReducer)

/*export type StorePropsType =  typeof store*/

export type AppStateType =  ReturnType <typeof RootReducer>
