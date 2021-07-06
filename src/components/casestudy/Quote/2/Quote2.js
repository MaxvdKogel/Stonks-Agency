import React from 'react'
import style from './Quote2.module.css'

const Quote2 = function() {
    return (
        <div className={`d-flex center ${style.bg}`}>
            <div className="container">
                <img src="/assets/img/GSV-logo.jpg" alt="Groningenstad Vastgoed logo" className={style.img}></img>
                <p className={style.p}>
                    Groningenstad Vastgoed werkte in excel bestanden. Dit werkt misschien voldoende voor kleinschalige projecten maar de bestanden werd dusdanig groot dat het onoverzichtelijk en traag werd.
                    Daarnaast was de data niet toegankelijk voor iedereen en dus onpraktisch. 
                </p>
                <p className={style.p}>
                    Efficiëntie en veiligheid
                    waren niet van de orde. 
                </p>
            </div>
        </div>
    )
}

export default Quote2;