import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    ProfileReducer,
    DialogsReducer
})

export let store = createStore(reducers)

