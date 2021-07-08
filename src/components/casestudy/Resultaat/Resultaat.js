import React from 'react'
import style from './Resultaat.module.css'

const Resultaat = function() {
    return(
        <div className={`d-flex align-center ${style.bg}`}>
            <div className="container">
                <p className={style.p}>
                    Dit allemaal bij elkaar heeft
                    Groningenstad Vastgoed geholpen
                    om efficiënter te werken.
                </p>
                <p className={style.p}>
                    Er word veel tijd bespaart en is
                    toegankelijk voor alle medewerkers
                    en het is veel veiliger.
                </p>
            </div>
            <h2 className={style.resultaat}>Resultaat</h2>
        </div>
    )
}

export default Resultaat;