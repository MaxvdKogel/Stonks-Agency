import React from 'react'
import { Link } from "react-router-dom";
import Logo from '/src/assets/svg/Logo.js'
import style from './Header.module.css'

const Header = function(props) {

    var theme = (typeof props.theme === "undefined" || props.theme === "dark") ? style["header--dark"] : style["header--light"];

    return(
        <header className={theme}>
            <div className="container d-flex align-center">
                <div className={style["logo__container"]}>
                    <Link to="/">
                        <Logo class={style.logo} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;