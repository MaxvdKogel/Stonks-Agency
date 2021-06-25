import React from "react";
import "../css/Header.module.css";

const Header = function() {
    return (
        <header>
            <div className="container header d-flex s-between">
                <div className="styles.logo">
                    <h1 className="logo-desktop">AM</h1>
                    <div className="line"></div>
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