import React, { useEffect } from 'react'
import style from './Quote4.module.css'

import Lock from "../../../../assets/svg/Lock";
import Key from "../../../../assets/svg/Key";

import Play from "../../../../assets/svg/Play";

const Quote4 = function() {

    var listeners = {
        click: (e) => {
            if(!e.target.hasAttribute("data-controls")) return;
            e.target.paused ? (
                e.target.parentNode.classList.add("is-playing"),
                e.target.play()
            ) : ( 
                e.target.parentNode.classList.remove("is-playing"),
                e.target.pause()
            );
        },
        webkitendfullscreen: (e) => {
            e.target.parentNode.classList.remove("is-playing");
        }
    };

    useEffect(() => {
    
        document.addEventListener("click", listeners.click);
        document.addEventListener("webkitendfullscreen", listeners.webkitendfullscreen);

        return () => {
            document.removeEventListener("click", listeners.click);
            document.removeEventListener("webkitendfullscreen", listeners.webkitendfullscreen);
        }
    }, []);

    return (
        <section className={`${style.section}`}>

            <div className={`container`}>

                <div className={`fade-in ${style["img-cover"]} ${style["vid-cover"]}`}>
                    <video poster="/assets/img/poster-demo.jpg" style={{transform:"scaleX(1.001)"}} muted loop data-controls>
                        <source src="/assets/vid/gsv-cover-demo-edited.mp4" type="video/mp4" />
                    </video>

                    <div className="controls">
                        <div className={style.cursorPlay}>
                            <Play />
                        </div>
                    </div>
                </div>

                {/* <div className={`fade-in ${style["img-cover"]}`}>
                    <img src="/assets/img/gsv-cover-software.jpg" />
                </div> */}

                <div className={style.QuoteDiv}>

                    <div className={style.animationLayer}>

                        <div className={`fade-in ${style.animationLock}`}>
                            <Lock />
                        </div>
                        <div className={`${style.animationLine}`}></div>
                        <div className={`${style.animationLineSecond}`}></div>
                        <div className={`fade-in ${style.animationKey}`}>
                            <Key />
                        </div>

                    </div>

                    <div className={`fade-in paragraph-wrapper ${style.paragraph}`}>
                        <p className={`${style.p}`}>
                            Om de veiligheid van gevoelige data
                            te waarborgen hebben we een
                            uitgebreide authenticatie/autorisatie
                            toegevoegd. Denk hierbij bijvoorbeeld aan
                            twee factor authenticatie (2FA).
                        </p>
                    </div>   
                </div>   

                <div className={`fade-in ${style["vid-cover"]} ${style["vid-cover--bottom"]}`}>
                    <video poster="/assets/img/poster-2fa.jpg" muted loop data-controls>
                        <source src="/assets/vid/gsv-cover-2fa.mp4" type="video/mp4" />
                    </video>

                    <div className="controls">
                        <div className={style.cursorPlay}>
                            <Play />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Quote4;