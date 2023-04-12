import {combineReducers, createStore, legacy_createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

/*type RootReducerType = typeof reducers
типизация заглушка???
export type AppType = ReturnType<RootReducerType>*/

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})

export let store = legacy_createStore(reducers)
export type StoreType = typeof store
/*export type RootReducerType = typeof reducers*/
export type ReduxStateType = ReturnType<typeof store.getState>