import React from 'react'
import style from './Resultaat.module.css'

const Resultaat = function() {
    return(
        <section className={`${style.section}`}>
            <div className="container">
                <p className={style.p}>
                    Dit allemaal bij elkaar heeft
                    Groningenstad Vastgoed geholpen
                    om efficiënter te werken.
                    Er word veel tijd bespaart en is
                    toegankelijk voor alle medewerkers
                    en het is veel veiliger.
                </p>
            </div>
            <h2 className={style.resultaat}>Resultaat</h2>
        </section>
    )
}

export default Resultaat;