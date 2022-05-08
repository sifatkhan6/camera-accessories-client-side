import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer'>
            <div>
                <p><small>Copyright Camera Accessories {year}</small></p>
            </div>
            <div>
                <p><small>Website Design and Implemented by Sifat Khan</small></p>
            </div>
        </footer>
    );
};

export default Footer;