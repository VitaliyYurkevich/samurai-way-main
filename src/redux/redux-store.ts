import {combineReducers, createStore, legacy_createStore, Store} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

/*type RootReducerType = typeof reducers
типизация заглушка???
export type AppType = ReturnType<RootReducerType>*/

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})

/*
export let store = legacy_createStore(reducers)
export type StoreType = typeof store
export type ReduxStateType = ReturnType<typeof store.getState>*/

export type RootState = ReturnType<typeof reducers>
export let store: Store<RootState> = legacy_createStore(reducers)