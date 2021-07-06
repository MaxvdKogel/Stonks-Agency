import React from 'react'
import Logo from '/src/assets/svg/Logo.js'
import style from './CasestudyHeader.module.css'

const CasestudyHeader = function() {
    return(
        <header className={style.header}>
            <div className="container d-flex align-center">
                <Logo />
            </div>
        </header>
    )
}

export default CasestudyHeader;