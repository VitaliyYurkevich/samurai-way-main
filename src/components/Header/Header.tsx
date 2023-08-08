import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";

type HeaderPropsType = {
    isAuth: boolean
    login: null

}

function Header(props: HeaderPropsType) {

    return <header className={classes.header}>
        <img
            src='https://avatars.mds.yandex.net/i?id=3cd27a746e4373e70f6167feca888b83fad687f8-7761916-images-thumbs&n=13'/>
        <div className={classes.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <button onClick={logout}>Log out</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink>
            }

        </div>
    </header>
}

export default Header