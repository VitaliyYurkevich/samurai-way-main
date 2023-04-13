import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StorePropsType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {AppType} from "./redux/redux-store";

/*
type AppPropsType = {
    store: StorePropsType
}
*/


const App = (props: any) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}
                        /*profilePage={state.profilePage}
                        messagesPage={state.messagesPage}*/
                    />
                    }/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



