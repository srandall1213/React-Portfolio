// import React from 'react';
import {useState} from 'react';
import facebook from '../images/facebook.png';
import gitHub from '../images/github.webp';
import linkedIn from '../images/linkedInLogo.jfif';

function Footer() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const styles = {
        image: {
            width: '50px',
            height: '50px',
            opacity: isHovering ? '0.92' : '1'
        }
    };

    return (
        <footer>
            <ul className="nav d-flex justify-content-around my-5">
                <li className="nav-item">
                    <a
                    href="https://www.linkedin.com/in/sarah-randall-07a01a45/" target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="LinkedIn Logo" style={styles.image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="https://github.com/srandall1213" target="_blank" rel="noreferrer">
                    <img src={gitHub} alt="GitHub Logo" style={styles.image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="https://www.facebook.com/mrs.sarahrandall" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="Facebook Logo" style={styles.image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}



export default Footer;