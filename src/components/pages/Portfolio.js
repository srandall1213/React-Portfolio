import React from 'react';
import gitsurveys from '../../images/gitsurveys.png'
import techblog from '../../images/techblog.png'
import emptracker from '../../images/emptracker.png'
import showfinder from '../../images/ShowFinder.png'
import weatherdash from '../../images/WeatherDashboardSS.png'
import workday from '../../images/workdaysched.png'
import prepstartsnow from "../../images/prepstartsnow.jpg"

export default function Project() {
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-4">

        <div className="card border-dark m-3">
            <img src={prepstartsnow} className="card-img-top border border-bottom" alt="Prep Starts Now"/>
            <div className="card-body">
              <h5 className="card-title">Prep Starts Now</h5>
              <p className="card-text">Team Project 3</p>
              <p className="card-text"></p>
              <p className="card-text"></p>
              <a href="www.prepstartsnow.com" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/benbushman98/Prep-Start-Now" target="_blank">Repo</a>
            </div>
          </div>

          <div className="card border-dark m-3">
            <img src={gitsurveys} className="card-img-top border border-bottom" alt="Git Surveys"/>
            <div className="card-body">
              <h5 className="card-title">GitSurveys</h5>
              <p className="card-text">Team Project 2</p>
              <p className="card-text">Interactive Full-Stack Application</p>
              <p className="card-text">Node.js, Express.js, Handlebars.js MySQL, Sequelize, Authentication, Bootstrap</p>
              <a href="https://gitsurveys.com" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/benbushman98/gitsurveys" target="_blank">Repo</a>
            </div>
          </div>

          <div className="card border-dark m-3">
            <img src={techblog} className="card-img-top border border-bottom" alt="Tech Blog"/>
            <div className="card-body">
              <h5 className="card-title">Tech Blog</h5>
              <p className="card-text">MVC, Handlebars.js, Sequelize, express-session</p>
              <a href="https://techblog1213.herokuapp.com/" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/srandall1213/Tech-Blog" target="_blank">Repo</a>
            </div>
          </div>

        </div>
        <div className="col-12 col-md-12 col-lg-4">

          <div className="card border-dark m-3">
            <img src={showfinder} className="card-img-top border border-bottom" alt="Show Finder"/>
            <div className="card-body">
              <h5 className="card-title">Show Finder</h5>
              <p className="card-text">Team Project 1</p>
              <p className="card-text">Interactive Front-End Application</p>
              <p className="card-text">HTML, CSS, JavaScript, Bulma CSS, Server-side APIs </p>
              <a href="https://srandall1213.github.io/Show-Finder/" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/srandall1213/Show-Finder" target="_blank">Repo</a>
            </div>
          </div>

          <div className="card border-dark m-3">
            <img src={emptracker} className="card-img-top border border-bottom" alt="Employee Tracker"/>
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">Node.js, Inquirer, MySQL</p>
              <a href="https://drive.google.com/file/d/1WsU63dKxyiQCK09MrVV6cNevCcDspGct/view" target="_blank">Walkthrough</a>
              <span> | </span>
              <a href="https://github.com/srandall1213/Employee-Tracker" target="_blank">Repo</a>
            </div>
          </div>
          
        </div>
        <div className="col-12 col-md-12 col-lg-4">

          <div className="card border-dark m-3">
            <img src={weatherdash} className="card-img-top border border-bottom" alt="Weather Dashboard Site"/>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Server-Side API, localStorage</p>
              <a href="https://srandall1213.github.io/Weather-Dashboard/" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/srandall1213/Weather-Dashboard" target="_blank">Repo</a>
            </div>
          </div>

          <div className="card border-dark m-3">
            <img src={workday} className="card-img-top border border-bottom" alt="Work Day Scheduler Site"/>
            <div className="card-body">
              <h5 className="card-title">Workday Scheduler</h5>
              <p className="card-text">Third-Party API, Moment.js, Bootstrap, jQuery</p>
              <a href="https://srandall1213.github.io/Work-Day-Scheduler/" target="_blank">Deployed</a>
              <span> | </span>
              <a href="https://github.com/srandall1213/Work-Day-Scheduler" target="_blank">Repo</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}