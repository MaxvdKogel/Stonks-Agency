import React, { useEffect, useState, useRef } from "react"

import lottie from "lottie-web"
import style from "./Contact.module.css"

// import antiRag from "../../helpers/antiRagging.js";

const Contact = function(props) {

    const isMountedRef = useRef(null);
    var theme = (typeof props.theme === "undefined" || props.theme === "dark") ? style["contact--dark"] : style["contact--light"],
        [resizeAmount, resizeIncrement] = useState(0);

    useEffect(() => {
        isMountedRef.current = true;

        const cursor = document.querySelector(".cursor");
        const contact_cta = document.querySelector("." + style["contact__cta"]);
        const contact_cta_span = document.querySelector('.contact__cta-span');

        var listeners = {
            mouseover:  e => {
                contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
                contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
                cursor.classList.add("hide-cursor");
            },
            mouseout: e => {
                contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
                contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
                cursor.classList.remove("hide-cursor");
            }
        };

        isMountedRef.current && contact_cta.addEventListener("mouseover", listeners.mouseover);
        isMountedRef.current && contact_cta.addEventListener("mouseout", listeners.mouseout);

        lottie.loadAnimation({
            container: document.querySelector("." + style["catLicking"]),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/lottie-animations/kat pootje.json'
        })  

        return () => {
            isMountedRef.current = false;

            contact_cta.removeEventListener("mouseover", listeners.mouseover);
            contact_cta.removeEventListener("mouseout", listeners.mouseout);
        };
    }, []);

    // useEffect(() => {
    //     antiRag.run(["." + style.contact__title]);
    // }, []);

    return (
        <section className={[style.contact, theme].join(" ")}>
            <div className={`container fade-in ${style.contact__container}`}>
                <div className={style.catLicking}></div>
                <div className={`outer ${style.contact__col}`}>
                    <h2 className={style.contact__title}>Klaar om in je bedrijf te <span className={`pink ${style.blue}`}>investeren</span>?</h2>
                    <p className={style.contact__txt}>Samen maken we er iets moois van.</p>
                    
                    <div className={`cta__hover ${style.contact__ctaDiv}`}>
                        <a className={`cta ${style.contact__cta}`} href="mailto: hello@stonks.agency">
                            <p className={`cta__txt ${style.cta__txt}`}>Contacteer ons</p>
                            <span className={`contact__cta-span ${style.ctaBg}`}></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;