import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType):MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth['isAuth']
    }
}


export const withAuthRedirect = (Component: any) => {


    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>

                return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps) (RedirectComponent)



    return ConnectedAuthRedirectComponent

}


