import React from 'react'
import style from './Quote.module.css'

const Quote = function () {
    return(
        <section className={`Quote1 ${style.section}`}>
            <div className={`container ${style.txt}`}>
                <p className={style.p}>
                    Voor Groningen Stad Vastgoed werden overvolle excel sheets te 
                    onoverzichtelijk en niet praktisch voor een geheel kantoor.
                    Daarom zijn wij samen om tafel
                    gegaan om tot een digitale
                    oplossing te komen.
                </p>
                {/* <p className={style.p}>
                    Daarom zijn wij samen om tafel
                    gegaan om tot een digitale
                    oplossing te komen.
                </p> */}
            </div>
        </section>
    )
}

export default Quote;