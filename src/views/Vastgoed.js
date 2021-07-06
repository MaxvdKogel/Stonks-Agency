import React from 'react'
import Cursor from '../components/Cursor'
import CasestudyHeader from '../components/casestudy/Header/CasestudyHeader'
import Casestudyhero from '../components/casestudy/Hero/Casestudyhero'
import Quote from '../components/casestudy/Quote/1/Quote'
import Quote2 from '../components/casestudy/Quote/2/Quote2'

const Vastgoed = function () {
    return (
        <div>
            <Cursor />
            <CasestudyHeader />
            <Casestudyhero />
            <Quote />
            <Quote2 />
        </div>
    )
}

export default Vastgoed;