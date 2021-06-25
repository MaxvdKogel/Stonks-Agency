import React from 'react';
import Phone from "../assets/svg/Phone.js"

function visitWebsite () {
    console.log("strontanusballen");
}

const Projects = function() {
    return (
        <section className="projects">
            <div className="container">

                <div className="recent-projects">
                    <div className="recent-projects__title-div">
                        <h2 className="recent-projects__title ">Recente <span className="pink">projecten</span></h2>                
                    </div>  
                    <div className="standing-cat"></div>
                </div>

                {/* mobile projects */}

                <div className="phoneroyal d-flex desktop-hidden">
                    <div className="phoneroyal__col">
                        <h2 className="phoneroyal__title">Phoneroyal</h2>
                        <p className="phoneroyal__txt">Telefoon reparatie bedrijf in Groningen.</p>
                        <div className="phoneroyal__cta-div">
                            <a href="https://www.phoneroyal.nl/" className="phoneroyal__cta">Bezoek website</a>
                        </div>                 
                    </div>
                    <Phone />
                </div>

                <div className="d-flex center desktop-hidden"><hr></hr></div>
                    
                <div className="vastgoed desktop-hidden">
                    {/* <svg className="desktop" xmlns="http://www.w3.org/2000/svg" width="223" height="158" viewBox="0 0 223 158">
                        <g id="undraw_Operating_system_re_iqsc" transform="translate(-102.983)">
                            <path id="Path_34" data-name="Path 34" d="M466.259,208.674H249.49a3.168,3.168,0,0,0-3.114,3.213V363.461a3.168,3.168,0,0,0,3.114,3.213H466.259a3.073,3.073,0,0,0,2.368-1.128.75.75,0,0,0,.068-.088,3.035,3.035,0,0,0,.446-.778,3.221,3.221,0,0,0,.236-1.22V211.887A3.168,3.168,0,0,0,466.259,208.674Zm2.228,154.787a2.31,2.31,0,0,1-1.211,2.041,2.153,2.153,0,0,1-1.018.254H249.49a2.264,2.264,0,0,1-2.225-2.3V211.887a2.264,2.264,0,0,1,2.225-2.3H466.259a2.265,2.265,0,0,1,2.229,2.3Z" transform="translate(-143.393 -208.674)" fill="#14161c"/>
                            <rect id="Rectangle_8" data-name="Rectangle 8" width="222.176" height="0.824" transform="translate(103.394 11.555)" fill="#14161c"/>
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.473" cy="2.473" r="2.473" transform="translate(107.927 3.709)" fill="#fff48d"/>
                            <path id="Path_47" data-name="Path 47" d="M2.473,0A2.473,2.473,0,1,1,0,2.473,2.473,2.473,0,0,1,2.473,0Z" transform="translate(115.036 3.709)" fill="#ff6e6e"/>
                            <circle id="Ellipse_3" data-name="Ellipse 3" cx="2.473" cy="2.473" r="2.473" transform="translate(122.145 3.709)" fill="#afff8e"/>
                            <path id="Path_35" data-name="Path 35" d="M513.054,283.922H394.63c-2.725,0-4.934-1.924-4.934-4.3s2.209-4.3,4.934-4.3H513.054c2.725,0,4.934,1.924,4.934,4.3S515.779,283.922,513.054,283.922ZM394.63,275.987a3.672,3.672,0,1,0,0,7.274H513.054a3.672,3.672,0,1,0,0-7.274Z" transform="translate(-239.327 -250.601)" fill="#14161c"/>
                            <path id="Path_36" data-name="Path 36" d="M381.2,370.116h-9.258a2.645,2.645,0,1,1,0-5.29H381.2a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-222.173 -307.054)" fill="#14161c"/>
                            <path id="Path_37" data-name="Path 37" d="M392.115,397.116H371.947a2.645,2.645,0,1,1,0-5.29h20.168a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-221.962 -324.065)" fill="#14161c"/>
                            <path id="Path_38" data-name="Path 38" d="M386.2,488.116h-9.258a2.645,2.645,0,0,1,0-5.29H386.2a2.645,2.645,0,0,1,0,5.29Z" transform="translate(-225.378 -381.397)" fill="#14161c"/>
                            <path id="Path_39" data-name="Path 39" d="M397.115,515.116H376.947a2.645,2.645,0,1,1,0-5.29h20.168a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-225.158 -398.408)" fill="#ccc"/>
                            <path id="Path_40" data-name="Path 40" d="M570.2,485.116h-9.258a2.645,2.645,0,1,1,0-5.29H570.2a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-343.299 -379.507)" fill="#14161c"/>
                            <path id="Path_41" data-name="Path 41" d="M581.115,512.116H560.947a2.645,2.645,0,1,1,0-5.29h20.168a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-342.763 -396.518)" fill="#ccc"/>
                            <path id="Path_42" data-name="Path 42" d="M567.2,375.116h-9.258a2.645,2.645,0,0,1,0-5.29H567.2a2.645,2.645,0,0,1,0,5.29Z" transform="translate(-341.377 -310.204)" fill="#14161c"/>
                            <path id="Path_43" data-name="Path 43" d="M578.115,402.116H557.947a2.645,2.645,0,0,1,0-5.29h20.168a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-340.846 -327.215)" fill="#14161c"/>
                            <path id="Path_44" data-name="Path 44" d="M754.2,369.116h-9.257a2.645,2.645,0,0,1,0-5.29H754.2a2.645,2.645,0,0,1,0,5.29Z" transform="translate(-458.812 -306.424)" fill="#14161c"/>
                            <path id="Path_45" data-name="Path 45" d="M765.115,396.116H744.947a2.645,2.645,0,1,1,0-5.29h20.168a2.645,2.645,0,1,1,0,5.29Z" transform="translate(-458.812 -323.435)" fill="#14161c"/>
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="9.919" cy="9.919" r="9.919" transform="translate(120.019 55.32)" fill="#f266aa"/>
                            <circle id="Ellipse_5" data-name="Ellipse 5" cx="9.919" cy="9.919" r="9.919" transform="translate(187.756 57.194)" fill="#f266aa"/>
                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="9.919" cy="9.919" r="9.919" transform="translate(254.343 54.946)" fill="#f266aa"/>
                            <circle id="Ellipse_7" data-name="Ellipse 7" cx="9.919" cy="9.919" r="9.919" transform="translate(120.019 99.531)" fill="#f266aa"/>
                            <circle id="Ellipse_9" data-name="Ellipse 9" cx="9.919" cy="9.919" r="9.919" transform="translate(188.476 98.407)" fill="#f266aa"/>
                            <path id="ic_perm_contact_calendar_24px" d="M12.2,2.15h-.575V1h-1.15V2.15h-4.6V1H4.725V2.15H4.15A1.15,1.15,0,0,0,3,3.3v8.05A1.15,1.15,0,0,0,4.15,12.5H12.2a1.153,1.153,0,0,0,1.15-1.15V3.3A1.153,1.153,0,0,0,12.2,2.15ZM8.175,3.875A1.725,1.725,0,1,1,6.45,5.6,1.725,1.725,0,0,1,8.175,3.875Zm3.45,6.9h-6.9V10.2c0-1.15,2.3-1.783,3.45-1.783s3.45.632,3.45,1.783Z" transform="translate(121.763 58.01)" fill="#fff"/>
                            <path id="ic_account_balance_24px" d="M3.046,5.666V9.3H4.615V5.666Zm3.138,0V9.3H7.754V5.666ZM2,11.888h9.938V10.332H2ZM9.323,5.666V9.3h1.569V5.666ZM6.969,1,2,3.592V4.629h9.938V3.592Z" transform="translate(190.706 59.417)" fill="#fff"/>
                            <path id="ic_supervisor_account_24px" d="M11.408,10.535A1.826,1.826,0,0,0,13.03,8.558a1.826,1.826,0,0,0-1.622-1.977A1.826,1.826,0,0,0,9.786,8.558a2.209,2.209,0,0,0,.474,1.4A1.485,1.485,0,0,0,11.408,10.535ZM6.542,9.744A2.191,2.191,0,0,0,8.488,7.372,2.191,2.191,0,0,0,6.542,5,2.191,2.191,0,0,0,4.6,7.372a2.649,2.649,0,0,0,.568,1.68A1.779,1.779,0,0,0,6.542,9.744Zm4.866,2.372c-1.187,0-3.569.727-3.569,2.175V16.07h7.137V14.291C14.977,12.844,12.6,12.117,11.408,12.117Zm-4.866-.791C5.03,11.326,2,12.251,2,14.093V16.07H6.542V14.291A3.175,3.175,0,0,1,8.08,11.547,6.612,6.612,0,0,0,6.542,11.326Z" transform="translate(255.773 54.224)" fill="#fff"/>
                            <g id="ic_photo_camera_24px" transform="translate(121.954 102.064)">
                            <circle id="Ellipse_16" data-name="Ellipse 16" cx="1.915" cy="1.915" r="1.915" transform="translate(6.069 6.069)" fill="#fff"/>
                            <path id="Path_92" data-name="Path 92" d="M6.189,2l-1.1,1.2H3.2A1.2,1.2,0,0,0,2,4.394v7.181a1.2,1.2,0,0,0,1.2,1.2h9.574a1.2,1.2,0,0,0,1.2-1.2V4.394a1.2,1.2,0,0,0-1.2-1.2h-1.9L9.779,2Zm1.8,8.976a2.992,2.992,0,1,1,2.992-2.992A2.992,2.992,0,0,1,7.984,10.976Z" fill="#fff"/>
                            </g>
                            <path id="ic_folder_24px" d="M6.46,4H3.115a1.115,1.115,0,0,0-1.11,1.115L2,11.806a1.118,1.118,0,0,0,1.115,1.115h8.921a1.118,1.118,0,0,0,1.115-1.115V6.23a1.118,1.118,0,0,0-1.115-1.115H7.575Z" transform="translate(190.819 100.074)" fill="#fff"/>
                        </g>
                    </svg> */}
                    <div className="vastgoed__col">
                        <h2 className="vastgoed__title">Groningen Stad Vatsgoed B.V.</h2>
                        <p className="vastgoed__txt"> Vastgoed software</p>
                        <div className="vastgoed__cta-div">
                            <a href="#" className="vastgoed__cta">Case study</a>
                        </div>
                    </div>
            </div>

            <div className="d-flex center desktop-hidden"><hr></hr></div>

            {/* dekstop projects */}

            <div className="desktop-projects phone-hidden">

                <div className="desktop-vastgoed desktop-project">
                <div className="client">
                    <p>Client</p>
                    <h2>Groningenstad Vastgoed</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Een volledige web software voor het onderhouden van vastgoed</p>
                </div>

                </div>

                <p className="year">2021</p>

                <div className="project-line"></div>

                <div className="desktop-phoneroyal desktop-project" onClick={visitWebsite}>
                <div className="client">
                    <p>Client</p>
                    <h2 className="desktop-phoneroyal__title">Phoneroyal</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Telefoon reparatie website met de mogelijkheid om reparaties te boeken</p>
                </div>
                </div>

                <p className="year">2020</p>

                <div className="project-line"></div>

                <div className="desktop-jasper desktop-project" onClick={visitWebsite}>
                <div className="client">
                    <p>Client</p>
                    <h2>Jasper Evenboer media</h2>
                </div>
                <div className="desktop-projects__description">
                    <p className="description__title">Wat we hebben gemaakt</p>
                    <p className="description">Website, portfolio voor videografie</p>
                </div>
                </div>

                <p className="year">2019</p>

                <div className="project-line"></div>

            </div>
            </div>
        </section>
    )
}

export default Projects;