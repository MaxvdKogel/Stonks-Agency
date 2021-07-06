import React from 'react'
import style from './Quote.module.css'

const Quote = function () {
    return(
        <div className={`d-flex align-center center ${style.background}`}>
            <div className="container">
                <p className={style.p}>
                    Voor Groningen Stad Vastgoed werden overvolle excel sheets te 
                    onoverzichtelijk en niet praktisch voor een geheel kantoor.
                </p>
                <p className={style.p}>
                    Daarom zijn wij samen om tafel
                    gegaan om tot een digitale
                    oplossing te komen.
                </p>
            </div>
        </div>
    )
}

export default Quote;