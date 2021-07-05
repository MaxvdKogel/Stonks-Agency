import React, { useEffect } from "react";

const Cursor = function() {

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        document.addEventListener('mousemove', function(e){
            cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
        });
    }, []);

    return (
        <div className="cursor">
            <p className="caseStudy">Case <br></br> study</p>
            <p className="bezoekWebsite">Bezoek <br></br> website</p>
        </div>
    )
}

export default Cursor;