import React from "react"
import style from "./Header.module.css"

const Header = function() {
    return (
        <header>
            <div className={`container d-flex s-between ${style.header}`}>
                <div className={style.logo}>
                    <h1 className={style.logoDesktop}>AM</h1>
                    <div className={style.line}></div>
                </div>
                {/* <div class="hamburger">
                    <span class="hamburger__line top-line"></span>
                    <span class="hamburger__line bottom-line"></span>
                </div> */}
            </div>
        </header>
    )
}

export default Header;