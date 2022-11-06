import React from 'react';
import facebook from '../images/pinkfacebook.png';
import gitHub from '../images/pinkgithub.png';
import linkedIn from '../images/pinklinkedin.png';
import '../css/style.css';
import 'animate.css';

function Footer() {

    return (
        <footer>
            <ul className="nav d-flex justify-content-around my-5">
                <li className="nav-item">
                    <a
                    href="https://www.linkedin.com/in/sarah-randall-07a01a45/" target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="LinkedIn Logo" className="icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="https://github.com/srandall1213" target="_blank" rel="noreferrer">
                    <img src={gitHub} alt="GitHub Logo" className="icon"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="https://www.facebook.com/mrs.sarahrandall" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="Facebook Logo" className="icon"/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}



export default Footer;