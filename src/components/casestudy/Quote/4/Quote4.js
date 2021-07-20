import React, { useEffect } from 'react'
import style from './Quote4.module.css'

const Quote4 = function() {

    var listeners = {
        click: (e) => {
            if(!e.target.hasAttribute("data-controls")) return;
            e.target.paused ? e.target.play() : e.target.pause();
        }
    };

    useEffect(() => {
    
        document.addEventListener("click", listeners.click);

        return () => {
            document.removeEventListener("click", listeners.click);
        }
    }, []);

    return (
        <section className={`${style.section}`}>

            <div className={`container ${style.Quote__container}`}>

                <div className={`fade-in ${style["img-cover"]}`}>
                    <img src="/assets/img/gsv-cover-software.jpg" />
                </div>

                <div className={style.QuoteDiv}>
                    <div className="fade-in paragraph-wrapper">
                        <p className={`${style.p}`}>
                            Om de veiligheid van gevoelige data
                            te waarborgen hebben we een
                            uitgebreide authorisatie/authenticatie
                            toegevoegd. Denk hierbij aan
                            twee factor authenticatie (2FA).
                        </p>
                    </div>   
                </div>   

                <div className={`fade-in ${style["vid-cover"]}`}>
                    <video muted loop data-controls>
                        <source src="/assets/vid/gsv-cover-2fa.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    )
}

export default Quote4;