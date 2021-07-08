import React from 'react'
import Cursor from '../components/Cursor'
import Header from '../components/Header/Header'
import Casestudyhero from '../components/casestudy/Hero/Casestudyhero'
import Quote from '../components/casestudy/Quote/1/Quote'
import Quote2 from '../components/casestudy/Quote/2/Quote2'
import Quote3 from '../components/casestudy/Quote/3/Quote3'
import Quote4 from '../components/casestudy/Quote/4/Quote4'
import Resultaat from '../components/casestudy/Resultaat/Resultaat'

const Vastgoed = function () {
    return (
        <div style={{background: "#fff"}}>
            <Header theme="light" />
            <Casestudyhero />
            <Quote />
            <Quote2 />
            <Quote3 />
            <Quote4 />
            <Resultaat />
            <Cursor />
        </div>
    )
}

export default Vastgoed;