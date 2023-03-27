import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Screens/Home'
import About from '../Screens/About'



const Routing = ()=>{



    return(

        <>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/home'  element={<Home/>} />
            <Route path='/about'  element={<About/>} />
        </Routes>
        </>

    )


}

export default Routing


