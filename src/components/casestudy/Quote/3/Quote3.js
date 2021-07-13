import React from 'react'
import style from './Quote3.module.css'

const Quote3 = function() {
    return(
        <section className={style.section}>
            <div className={`container ${style.Quote3Container}`}>
                <p className={style.p}>
                    Wij hebben een overzichtelijk en
                    modern dashboard gemaakt
                    waarin alle belangrijke data zoals
                    gegevens en documenten met
                    één klik te vinden zijn.
                    Ook hebben we een agenda
                    toegevoegd die medewerkers helpt te
                    herinneren contact
                    te leggen met kopers.
                </p>
            </div>
        </section>
    )
}

export default Quote3;