import React from "React"
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
            <section className={style.background}>
                <div className={`container ${style.hero__container}`}>
                    <div className={style.txt}>
                        <p className={style.subtxt}>Client</p>
                        <h1 className={style.title}>{this.state.title}</h1>
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