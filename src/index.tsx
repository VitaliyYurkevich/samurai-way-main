import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";



{/*dispatch={store.dispatch.bind(store)}*/}



    ReactDOM.render(
        <BrowserRouter>
            <Provider  store={store}>
                <App />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    )





/*store.subscribe(rerenderEntireTree)*/
/*rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()

    rerenderEntireTree(state)
})*/


/*
store.subscribe(rerenderEntireTree)
rerenderEntireTree()*/


