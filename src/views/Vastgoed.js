import React, { useEffect } from 'react'
import Cursor from '../components/Cursor'
import Header from '../components/Header/Header'
import Casestudyhero from '../components/casestudy/Hero/Casestudyhero'
import Quote from '../components/casestudy/Quote/1/Quote'
import Quote2 from '../components/casestudy/Quote/2/Quote2'
import Quote3 from '../components/casestudy/Quote/3/Quote3'
import Quote4 from '../components/casestudy/Quote/4/Quote4'
import Resultaat from '../components/casestudy/Resultaat/Resultaat'
import Contact from '../components/Contact/Contact'

const Vastgoed = function () {

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div style={{background: "#fff"}}>
            <Header theme="light" />
            <Casestudyhero />
            <Quote />
            <Quote2 />
            <Quote3 />
            <Quote4 />
            <Resultaat />
            <Contact theme="light"/>
            <Cursor />
        </div>
    )
}

export default Vastgoed;