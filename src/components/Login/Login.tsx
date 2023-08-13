import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import classes from "../common/FormsControls/FormsControls.module.css";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean

}


const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={'Email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'}
                       component={Input}
                       validate={[required]}
                       type={"password"}
                />
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={'remember me'} placeholder={"Login"}/>
            </div>
            <div className={classes.formSummaryError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth['isAuth']
    }
}

export default connect(mapStateToProps, {login})(Login);