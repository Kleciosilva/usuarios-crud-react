import React from 'react'

import Logo from './Logo'
import Nav from './Nav'

export default props =>
<header className="header mb-5">
    <div className="bg-dark text-light py-3">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <Logo />
                <Nav />
            </div>
        </div>
    </div>

    <div className="bg-light text-dark py-3">
        <div className="container">
            <h4>
                <i className={`fa fa-${props.icon} mr-3`} ></i>
                { props.title }
            </h4>
            <p className="m-0">{ props.subtitle }</p>
        </div>
    </div>
</header>