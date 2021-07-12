import React, { useEffect, useState } from "react"

import lottie from "lottie-web"
import style from "./Contact.module.css"

// import antiRag from "../../helpers/antiRagging.js";

const Contact = function(props) {

    var theme = (typeof props.theme === "undefined" || props.theme === "dark") ? style["contact--dark"] : style["contact--light"],
        [resizeAmount, resizeIncrement] = useState(0);

    useEffect(() => {

        Event.$emit("strontje", "poep");

        const cursor = document.querySelector(".cursor");
        const contact_cta = document.querySelector("." + style["contact__cta"]);
        const contact_cta_span = document.querySelector('.contact__cta-span');

        contact_cta.addEventListener("mouseover", e => {
            contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
            contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
            cursor.classList.add("hide-cursor");
        });

        contact_cta.addEventListener("mouseout", e => {
            contact_cta_span.style.left = e.pageX - contact_cta.offsetLeft + "px";
            contact_cta_span.style.top = e.pageY - contact_cta.offsetTop + "px";
            cursor.classList.remove("hide-cursor");
        });

        lottie.loadAnimation({
            container: document.querySelector("." + style["catLicking"]),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/assets/lottie-animations/kat pootje.json'
        })  
    }, []);

    // useEffect(() => {
    //     antiRag.run(["." + style.contact__title]);
    // }, []);

    return (
        <section className={[style.contact, theme].join(" ")}>
            <div className={`container ${style.contact__container}`}>
                <div className={style.catLicking}></div>
                <div className={`outer ${style.contact__col}`}>
                    <h2 className={style.contact__title}>Klaar om in je bedrijf te <span className={`pink ${style.blue}`}>investeren</span>?</h2>
                    <p className={style.contact__txt}>Samen maken we er iets moois van.</p>
                    
                    <div className={`cta__hover ${style.contact__ctaDiv}`}>
                        <a className={`cta ${style.contact__cta}`} href="mailto: stront@gmail.com">
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