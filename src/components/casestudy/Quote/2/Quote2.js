import React from 'react'
import style from './Quote2.module.css'

const Quote2 = function() {
    return (
        <section className={`${style.section}`}>

            <div className={`container ${style.Quote2Container}`}>

                <div className={style["img-cover"]}>
                    <img src="/assets/img/gsv-cover-logo.jpg" />
                </div>

                <p className={style.p}>
                    Groningenstad Vastgoed werkte in excel bestanden. Dit werkt misschien voldoende voor kleinschalige projecten maar de bestanden werd dusdanig groot dat het onoverzichtelijk en traag werd.
                    Daarnaast was de data niet toegankelijk voor iedereen en dus onpraktisch. Efficiëntie en veiligheid
                    waren niet van de orde. 
                </p>

            </div>

            <div className={style.figure}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="80" viewBox="0 0 382.656 194.771"><ellipse cx="13.248" cy="27.031" rx="13.248" ry="27.031" transform="translate(69.098 122.6)" fill="#e6e6e6"/><path d="M360.473,585.576c-5.306-31.835-.053-63.555,0-63.871l1.032.175c-.053.315-5.276,31.868,0,63.525Z" transform="translate(-276.904 -391.699)" fill="#3f3d56"/><rect width="13.586" height="1.047" transform="translate(82.028 150.226) rotate(-28.142)" fill="#3f3d56"/><rect width="1.047" height="13.586" transform="translate(69.385 147.951) rotate(-61.842)" fill="#3f3d56"/><rect width="21.714" height="75.163" transform="translate(327.822 1.804)" fill="#14161c"/><path d="M532.282,62.827,479.47,0,373.462.969,309.156,63.6l1.3.835h-.464V194.722H532.139V64.44Z" transform="translate(-168.406)" fill="#14161c"/><path d="M604.431.294l-65.976,77.35V194.882h118.59V62.93Z" transform="translate(-293.312 -0.16)" fill="#003770"/><rect width="24.219" height="21.407" transform="translate(292.746 129.888)" fill="#3f3d56"/><rect width="24.219" height="21.067" transform="translate(292.746 92.835)" fill="#3f3d56"/><rect width="24.219" height="21.407" transform="translate(292.746 129.888)" fill="#fff"/><rect width="24.219" height="21.067" transform="translate(292.746 92.835)" fill="#fff"/><path d="M25.912,0C40.222,0,51.823,23.671,51.823,52.87s-11.6,52.87-25.912,52.87S0,82.07,0,52.87,11.6,0,25.912,0Z" transform="translate(24.603 55.073)" fill="#fff"/><path d="M291.506,513.875c-10.364-62.183-.1-124.14,0-124.759l1.032.175c-.1.617-10.334,62.407,0,124.412Z" transform="translate(-238.105 -319.474)" fill="#3f3d56"/><rect width="26.573" height="1.047" transform="translate(50.131 109.548) rotate(-28.142)" fill="#3f3d56"/><rect width="1.047" height="26.573" transform="translate(25.403 104.218) rotate(-61.842)" fill="#3f3d56"/><ellipse cx="35.458" cy="72.349" rx="35.458" ry="72.349" transform="translate(76.427 3.773)" fill="#fff"/><path d="M427.02,458.956c-14.177-85.062-.143-169.813,0-170.659l1.032.175c-.143.845-14.147,85.429,0,170.312Z" transform="translate(-310.995 -264.555)" fill="#3f3d56"/><rect width="36.363" height="1.047" transform="translate(111.451 78.488) rotate(-28.142)" fill="#3f3d56"/><rect width="1.047" height="36.363" transform="matrix(0.472, -0.882, 0.882, 0.472, 77.611, 70.852)" fill="#3f3d56"/><rect width="382.656" height="0.911" transform="translate(0 193.86)" fill="#14161c"/><rect width="24.219" height="21.407" transform="translate(185.114 124.208)" fill="#3f3d56"/><rect width="24.219" height="21.067" transform="translate(185.114 87.154)" fill="#3f3d56"/><rect width="24.219" height="21.407" transform="translate(185.114 124.208)" fill="#fff"/><rect width="24.219" height="21.067" transform="translate(185.114 87.154)" fill="#fff"/></svg>
            </div>

        </section>
    )
}

export default Quote2;