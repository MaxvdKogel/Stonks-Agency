import React from 'react'
import style from './Quote4.module.css'

const Quote4 = function() {
    return (
        <section className={`${style.section}`}>

            <div className={`container ${style.Quote__container}`}>

                <div className={style["img-cover"]}>
                    <img src="/assets/img/gsv-cover-software.jpg" />
                </div>

                <div className={style["vid-cover"]}>
                    <video autoPlay muted loop>
                        <source src="/assets/vid/gsv-cover-2fa.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={style.QuoteDiv}>
                    <p className={style.p}>
                        Om de veiligheid van gevoelige data
                        te waarborgen hebben we een
                        uitgebreide authorisatie/authenticatie
                        toegevoegd. Denk hierbij aan
                        twee factor authenticatie (2FA).
                    </p>
                </div>   

            </div>
        </section>
    )
}

export default Quote4;