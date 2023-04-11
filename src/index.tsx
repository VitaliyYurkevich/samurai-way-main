import React from 'react';
import './index.css';
import { store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {statePropsType, StorePropsType} from "./redux/state";


export let rerenderEntireTree = (state: statePropsType  ) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}  />
        </BrowserRouter>, document.getElementById('root')
    )
}


rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})


/*
store.subscribe(rerenderEntireTree)
rerenderEntireTree()*/
