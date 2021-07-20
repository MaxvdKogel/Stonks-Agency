import React, {useEffect} from "react"
import KatGebouw from "../../../assets/svg/Kat-Gebouw";
import style from "./Casestudyhero.module.css";

class Casestudyhero extends React.Component {
    
    constructor() {
        super()
        
        this.state = {
            title: "Groningenstad \nVastgoed"
        }
    }

    render() {
        return (
            <section className={style.section}>
                <div className={`container ${style.hero__container}`}>
                    <div className={style["hero__content-container"]}>

                        <div className={style.txt}>
                            <p className={style.subtxt}>Client</p>
                            <h1 className={style.title}>{this.state.title}</h1>
                        </div>

                        <div className={style["hero__content-intro"]}>
                            <h2>Een efficiënte werkplek realiseren.</h2>
                            <p>
                                Voor Groningen Stad Vastgoed werden overvolle 
                                excel sheets te onoverzichtelijk en niet praktisch 
                                voor een geheel kantoor. Daarom zijn wij samen 
                                om tafel gegaan om tot een digitale oplossing 
                                te komen.
                            </p>
                            <p>
                                Dit werkt misschien voldoende voor kleinschalige 
                                projecten maar de bestanden werd dusdanig groot 
                                dat het  onoverzichtelijk en traag werd. Daarnaast 
                                was de data niet toegankelijk voor iedereen en dus 
                                onpraktisch. Efficiëntie en veiligheid waren niet van 
                                de orde.
                            </p>
                        </div>

                    </div>

                    <div className={style.catDiv}>
                        <KatGebouw />                
                    </div>
                </div>
            </section>
        )
    }
}

export default Casestudyhero;