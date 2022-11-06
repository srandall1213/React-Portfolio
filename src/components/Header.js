import React from 'react';
import '../css/style.css';
import 'animate.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <div className="jumbotron jumbotron-fluid bg-dark text-center">
        <div className="container">
          <h1 className="display-4 title">Sarah Randall</h1>
        </div>
    </div>
    <div>
      <ul className="nav d-flex justify-content-around custom-nav">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Header;
