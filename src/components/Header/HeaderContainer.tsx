import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout, setAuthUserDataAC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type MapStatePropsType = {
    isAuth: boolean
    login: null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return(
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {

    return{

        isAuth: state.auth["isAuth"],

        login: state.auth["login"]
    }
}

export default connect(mapStateToProps, {
    logout,
    setAuthUserDataAC,
    getAuthUserData
} )(HeaderContainer)