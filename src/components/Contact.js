import React, { useEffect } from "react";
import lottie from "lottie-web"

const Contact = function() {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const contact_cta = document.querySelector('.contact__cta');
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
            container: document.querySelector('.cat-licking'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/lottie-animations/kat pootje.json'
        })  
      }, [])

    return (
        <section className="contact">
            <div className="container contact__container">
                <div className="cat-licking"></div>
                <div className="contact__col">
                    <h2 className="contact__title">Klaar om in je bedrijf te <span className="pink">investeren</span>?</h2>
                    <p>Samen maken we er iets moois van.</p>
                    
                    <div className="contact__cta-div cta__hover">
                        <a className="contact__cta cta" href="mailto: stront@gmail.com">
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