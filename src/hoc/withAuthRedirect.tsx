import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth['isAuth']
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {


    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {

        let {isAuth, ...restProps} = props


        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)


    return ConnectedAuthRedirectComponent

}


