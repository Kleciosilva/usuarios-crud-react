import './Main.css'
import React from 'react'

import Header from './Header'
import Footer from '../template/Footer'

export default props => 
    <React.Fragment>
        <Header {...props} />
        { props.children }
        <Footer />
    </React.Fragment>