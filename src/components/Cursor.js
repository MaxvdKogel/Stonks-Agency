import React, { useEffect, useState } from "react";
import gsap from "gsap";
import style from "./Cursor.module.css"

const Cursor = function(props) {
    var theme = (typeof props.theme === "undefined" || props.theme === "dark") ? style["cursor--dark"] : style["cursor--light"]

    const [text, setText] = useState("");
    const [color, setColor] = useState("#FDB5F1");

    useEffect(() => {
        const cursor = document.querySelector(".cursor")

        document.addEventListener('mousemove', function(e){

            cursor.classList.contains("hide") && cursor.classList.remove("hide");

            if (e.target.classList.contains("project--desktop")) {
                !cursor.classList.contains("project--hover") && cursor.classList.add("project--hover");
                e.target.getAttribute("data-text") && setText(e.target.getAttribute("data-text"));
                e.target.getAttribute("data-color") && setColor(e.target.getAttribute("data-color"));
            } else {
                cursor.classList.contains("project--hover") && (
                    cursor.classList.remove("project--hover"),
                    setText(""),
                    setColor("#FDB5F1")
                );
            } 

            gsap.to(cursor, {
                x: e.clientX - (cursor.getBoundingClientRect().width/2),
                y: e.clientY - (cursor.getBoundingClientRect().height/2),
                overwrite: true,
                ease: "expo.out"
            });
        });

        document.addEventListener('mouseleave', function(e){
            !cursor.classList.contains("hide") && cursor.classList.add("hide");
        });
        
    }, []);

    return (
        <div className={`cursor ${theme}`} style={{"--color": color }}>
            <div className="cursor__media">
                {text.split(" ").map((text,i) =>
                    <span key={i}>{text}</span>
                )}
            </div>
        </div>
    )
}

export default Cursor;