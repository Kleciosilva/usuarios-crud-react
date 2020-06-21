import './Footer.css'
import React from 'react'

export default props => 
        <footer className="footer bg-dark text-light mt-5 py-3">
            <div className="container">
                <div className="text-center">
                    &copy; 2020 - Desenvolvido como projeto do curso Web Moderno da Cod3r Br
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <i className="fa fa-linkedin-square mr-3"></i>
                    <a href="//www.linkedin.com/in/kleciosilva/" className="text-light">@kleciosilva</a>
                </div>
            </div>
        </footer>