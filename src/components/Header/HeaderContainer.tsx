import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: null
}

type MapDispatchPropsType = {
    setAuthUserDataAC: (userId: null, email: null, login: null) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType



class HeaderContainer extends React.Component<OwnPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {userId, email, login} = response.data
                    this.props.setAuthUserDataAC(userId, email, login)
                }
            })
    }

    render() {
        return(
            <Header  isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {

    return{
        // @ts-ignore
        isAuth: state.auth.isAuth,
        // @ts-ignore
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserDataAC} )(HeaderContainer)