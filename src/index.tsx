import React from 'react';
import './index.css';
import { store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {statePropsType, StorePropsType} from "./redux/state";
import StoreContext, {Provider} from "./storeContext";



export let rerenderEntireTree = (state: statePropsType) => {

    // @ts-ignore
    ReactDOM.render(
        <BrowserRouter>
            <Provider  store={store}>
                <App  store={store}   />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    )
}


rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


/*
store.subscribe(rerenderEntireTree)
rerenderEntireTree()*/
