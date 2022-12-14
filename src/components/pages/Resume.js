import React from 'react';
import downloadIcon from "../../images/pinkdownload.png"
import '../../css/style.css';
import 'animate.css';

export default function Resume() {
  return (
    <>
      <div className="text-center mt-4">

        <a 
        href="https://drive.google.com/file/d/1J-sOHDNZLLyYDfFrdcOFpfYaS60dYcve/view?usp=share_link" target="_blank">
          <button type="button" className="btn btn-outline-dark btn-lg">Resume
            <img src= {downloadIcon} className="downloadIcon d-inline" alt="download icon"/>
          </button>
        </a>
       
      </div>

      <div className="m-4">
        <h4>Proficiencies (A-Z):</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">APIs</li>
          <li className="list-group-item">Bootstrap CSS</li>
          <li className="list-group-item">Bulma CSS</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">Express-Session</li>
          <li className="list-group-item">Git</li>
          <li className="list-group-item">GraphQL</li>
          <li className="list-group-item">Handlebars</li>
          <li className="list-group-item">Heroku</li>
          <li className="list-group-item">Inquirer</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">Node</li>
          <li className="list-group-item">MongoDB</li>
          <li className="list-group-item">Mongoose</li>
          <li className="list-group-item">MySQL</li>
          <li className="list-group-item">MVC</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">REST</li>
          <li className="list-group-item">Sequelize</li>
        </ul>
      </div>

    </>
  );
}
