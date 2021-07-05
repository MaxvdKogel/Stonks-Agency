import React, { useEffect } from "react"
import lottie from "lottie-web"
import style from "./Contact.module.css"

const Contact = function() {

    useEffect(() => {
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
      }, [])

    return (
        <section className={style.contact}>
            <div className={`container ${style.contact__container}`}>
                <div className={style.catLicking}></div>
                <div className={style.contact__col}>
                    <h2 className={style.contact__title}>Klaar om in je bedrijf te <span className="pink">investeren</span>?</h2>
                    <p>Samen maken we er iets moois van.</p>
                    
                    <div className={`cta__hover ${style.contact__ctaDiv}`}>
                        <a className={`cta ${style.contact__cta}`} href="mailto: stront@gmail.com">
                            <text>Contacteer ons</text>
                            <span className="contact__cta-span"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;