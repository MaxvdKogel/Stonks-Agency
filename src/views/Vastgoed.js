import React from 'react'
import Cursor from '../components/Cursor'
import Header from '../components/Header/Header'
import Casestudyhero from '../components/casestudy/Hero/Casestudyhero'
import Quote from '../components/casestudy/Quote/1/Quote'
import Quote2 from '../components/casestudy/Quote/2/Quote2'

const Vastgoed = function () {
    return (
        <div style={{background: "#fff"}}>
            <Header theme="light" />
            <Casestudyhero />
            <Quote />
            <Quote2 />
            <Cursor />
        </div>
    )
}

export default Vastgoed;