import React from 'react';
import portrait from '../../images/me.png';

export default function About() {
  const styles = {
    imageSize: {
      width: '75%',
      boxShadow: '0 0 5px #999',
    },
  };

  return (
    <div className="container mx-auto m-4">
      <div className='row'>
        <div className="col-12 col-md-12 col-lg-4 align-self-center text-center my-3">
          <img src={portrait} alt="Sarah Randall" style={styles.imageSize}/>
        </div>
        <div className='col-12 col-md-12 col-lg-8 align-self-center pt-3 pb-0'>
          <p>
          Hello, my name is Sarah Randall. I currently live in Davis County, Utah with my husband and two little kids. I have loved playing with HTML and CSS since I was young. 
          I ended up graduating from Utah State University with a bachelor's degree in Marketing in 2014. I worked in several administrative jobs where I enjoyed collaborative team environments.
          After being a stay-at-home mom for several years, I decided to start a new career and attend the University of Utah Full-Stack Developer Boot Camp.
          I have really enjoyed getting to learn new skills and can't wait to see what the future holds. 
          </p>
        </div>
      </div>
    </div>
  );
}
