import React from 'react'
import style from './Quote3.module.css'

const Quote3 = function() {
    return(
        <section className={style.section}>
            <div className={`container ${style.Quote3Container}`}>
                <div className="fade-in paragraph-wrapper">
                    <p className={`${style.p}`}>
                        We hebben een overzichtelijk en
                        modern dashboard gedesigned en gebouwd,
                        waarin alle belangrijke data zoals
                        gegevens en documenten met één klik te 
                        vinden zijn. Ook hebben we een digitale 
                        agenda toegevoegd.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Quote3;