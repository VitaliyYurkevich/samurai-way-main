import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

/*type RootReducerType = typeof reducers
типизация заглушка???
export type AppType = ReturnType<RootReducerType>*/

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogsReducer
})



export let store = createStore(reducers)

