import React from 'react';
import './index.css';
import {state, statePropsType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)