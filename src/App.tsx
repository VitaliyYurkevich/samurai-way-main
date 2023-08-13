import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ActionDispatchTypes, AppStateType} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType = {
    store: AppStateType
    /*dispatch: (action:ActionDispatchTypes ) => void*/
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
}

class App extends React.Component<MapDispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        /*const state = props.getState()*/
if(!this.props.initializeApp) {
    return <Preloader/>
}


        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>

                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>

                        <Route path={'/news'} render={() => <News/>}/>

                        <Route path={'/music'} render={() => <Music/>}/>

                        <Route path={'/settings'} render={() => <Settings/>}/>

                        <Route path={'/users'} render={() => <UsersContainer/>}/>

                        <Route path={'/login'} render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

/*const mapStateToProps = (state: AppStateType) => {
    initialized: state.app.initialized
}*/


 compose(
    withRouter, connect(null, {
    getAuthUserData,
    initializeApp
    }))
(App);

export default App



