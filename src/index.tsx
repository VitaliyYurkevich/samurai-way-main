import React from 'react';
import './index.css';
import {store, statePropsType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>, document.getElementById('root')
    )
}

console.log()
store.subscribe(rerenderEntireTree)
rerenderEntireTree()